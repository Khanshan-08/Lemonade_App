import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles/financeScreenStyle";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slider } from "@rneui/themed";

const Finances = (route) => {
  const ref = useRef();
  const navigation = useNavigation();
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [ingredientCost, setIngredientCost] = useState(0);
  const [otherCost, setOtherCost] = useState(0);
  const [calculatedProfit, setCalculatedProfit] = useState(0);
  const [value, setValue] = useState(50);

  const [fontsLoaded] = useFonts({
    "AnonymousPro-Bold": require("../fonts/AnonymousPro-Bold.ttf"),
    "AnonymousPro-Regular": require("../fonts/AnonymousPro-Regular.ttf"),
  });

  // Show loading indicator until the font is loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const totalRevenue = totalSales * price;
  const totalCost = ingredientCost + otherCost;

  const positionTotalSales = useRef(new Animated.Value(value)).current;
  const positionPrice = useRef(new Animated.Value(value)).current;

  // Function to calculate profit when the button is pressed
  const calculateProfit = () => {
    const profit = totalRevenue - totalCost;
    setCalculatedProfit(profit);
  };

  const sliderWidth = 260; // Width of the slider
  const thumbWidth = 30; // Width of the thumb
  const position = useRef(new Animated.Value(value)).current;

  // Sensitivity for thumb drag movement
  const sensitivity = 2;

  // PanResponder for handling thumb drag
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const newValue = Math.max(
          0,
          Math.min(
            100,
            Math.round(((gestureState.moveX * sensitivity) / sliderWidth) * 100)
          )
        );
        position.setValue(newValue);
        setValue(newValue);
      },
    })
  ).current;

  const panResponderTotalSales = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const newValue = Math.max(
          0,
          Math.min(
            100,
            Math.round(((gestureState.moveX * sensitivity) / sliderWidth) * 100)
          )
        );
        positionTotalSales.setValue(newValue);
        setValue(newValue);
      },
    })
  ).current;

  const panResponderPrice = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const newValue = Math.max(
          0,
          Math.min(
            100,
            Math.round(((gestureState.moveX * sensitivity) / sliderWidth) * 100)
          )
        );
        positionPrice.setValue(newValue);
        setValue(newValue);
      },
    })
  ).current;

  // Function to handle clicking on the slider track
  const onTrackPressTotalSales = (evt) => {
    const clickX = evt.nativeEvent.locationX;
    const newValue = Math.max(
      0,
      Math.min(100, Math.round((clickX / sliderWidth) * 100))
    );
    positionTotalSales.setValue(newValue);
    setTotalSales(newValue);
  };

  const onTrackPressPrice = (evt) => {
    const clickX = evt.nativeEvent.locationX;
    const newValue = Math.max(
      0,
      Math.min(100, Math.round((clickX / sliderWidth) * 100))
    );
    positionPrice.setValue(newValue);
    setPrice(newValue); // Update the price directly here
  };

  // Interpolate the position for the thumb and filled track
  const thumbPosition = position.interpolate({
    inputRange: [0, 100],
    outputRange: [0, sliderWidth - thumbWidth],
    extrapolate: "clamp",
  });

  const fillTrackWidth = position.interpolate({
    inputRange: [0, 100],
    outputRange: [0, sliderWidth],
    extrapolate: "clamp",
  });

  const thumbPositionTotalSales = positionTotalSales.interpolate({
    inputRange: [0, 100],
    outputRange: [0, sliderWidth - thumbWidth],
    extrapolate: "clamp",
  });

  const fillTrackWidthTotalSales = positionTotalSales.interpolate({
    inputRange: [0, 100],
    outputRange: [0, sliderWidth],
    extrapolate: "clamp",
  });

  const thumbPositionPrice = positionPrice.interpolate({
    inputRange: [0, 100],
    outputRange: [0, sliderWidth - thumbWidth],
    extrapolate: "clamp",
  });

  const fillTrackWidthPrice = positionPrice.interpolate({
    inputRange: [0, 100],
    outputRange: [0, sliderWidth],
    extrapolate: "clamp",
  });

  const previousScreen = route.params?.previousScreen;

  useEffect(() => {
    const originalConsoleWarn = console.warn;

    // Override console.warn to suppress specific warnings
    console.warn = (...args) => {
      if (
        args[0]?.includes(
          "Support for defaultProps will be removed from function components"
        )
      ) {
        return; 
      }
      originalConsoleWarn(...args); 
    };

    return () => {
      console.warn = originalConsoleWarn; 
    };
  }, []);

  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFFBDE" barStyle="dark-content" />
          <View style={styles.heading_container}>
            <TouchableOpacity
              style={styles.chevron_left}
              onPress={() => {
                if (previousScreen === "RecipeScreen") {
                  navigation.navigate("RecipeScreen");
                } else if (previousScreen === "MenuScreen") {
                  navigation.navigate("MenuScreen");
                } else {
                  navigation.goBack();
                }
              }}
            >
              <Image
                source={require("./images/chevron-left.png")}
                style={styles.chevron_img}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.recipetext_box}>
              <Text style={styles.recepies_text}>FINANCES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.chevron_right}
              onPress={() => navigation.navigate("buildScreen")}
            >
              <Image
                source={require("./images/chevron-right.png")}
                style={styles.chevron_img}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.first_box}>
              <View style={styles.profit_box}>
                <View style={styles.profit_text_box}>
                  <View style={styles.profit_text}>
                    <Text style={styles.text}>PROFITS:</Text>
                  </View>
                </View>
                <View style={styles.profit_amount_box}>
                  <View style={styles.profit_amount}>
                    <Text
                      style={styles.amount}
                      numberOfLines={1}
                      adjustsFontSizeToFit={true}
                      minimumFontScale={0.5}
                      maxFontSizeMultiplier={1.5}
                    >
                      ${calculatedProfit}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.second_box}>
              <View style={styles.revenue_box}>
                <View style={styles.revenue_text_box}>
                  <Text style={styles.revenue_text}>
                    R{"\n"}E{"\n"}V{"\n"}E{"\n"}N{"\n"}U{"\n"}E
                  </Text>
                </View>

                <View style={styles.total_revenue_box}>
                  <View style={styles.total_sales_box}>
                    <Text style={styles.label}>{totalSales} cups</Text>
                    <View
                      style={{
                        width: 260,
                        height: 20,
                        justifyContent: "center",
                      }}
                    >
                      <Slider
                        value={totalSales}
                        onValueChange={setTotalSales}
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        allowTouchTrack
                        minimumTrackTintColor="#FFE853" // Fill track color
                        maximumTrackTintColor="#FFFFFF" // Color of the unfilled track
                        trackStyle={{
                          height: 16,
                          borderRadius: 20,
                        }}
                        thumbStyle={{
                          height: 30,
                          width: 30,
                          backgroundColor: "#CFFFEC", // Custom thumb background color
                          borderColor: "#000", // Border color
                          borderWidth: 1, // Border width of 1
                          borderRadius: 15, // Optional: To make the thumb circular
                        }}
                      />
                    </View>
                    <Text style={styles.label_slider}>Total Sales</Text>
                  </View>

                  <View style={styles.price_per_cup_box}>
                    <Text style={styles.label}>${price.toFixed(2)} /cup</Text>
                    <View
                      style={{
                        width: 260,
                        height: 20,
                        justifyContent: "center",
                      }}
                    >
                      <Slider
                        value={price}
                        onValueChange={setPrice}
                        maximumValue={10}
                        minimumValue={0}
                        step={0.5}
                        allowTouchTrack
                        minimumTrackTintColor="#FFE853" // Fill track color
                        maximumTrackTintColor="#FFFFFF" // Color of the unfilled track
                        trackStyle={{
                          height: 16,
                          borderRadius: 20,
                        }}
                        thumbStyle={{
                          height: 30,
                          width: 30,
                          backgroundColor: "#CFFFEC", 
                          borderColor: "#000", // Border color
                          borderWidth: 1, // Border width of 1
                          borderRadius: 15, // Optional: To make the thumb circular
                        }}
                      />
                    </View>
                    <Text style={styles.label_slider}>Price Per Cup</Text>
                  </View>

                  <View style={styles.total_revenue}>
                    <View style={styles.sale_text_box}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          fontFamily: "AnonymousPro-Regular",
                        }}
                      >
                        Total Sales x Price Per Cup ={" "}
                      </Text>
                    </View>

                    <View style={styles.cost_cont_calc_box}>
                      <View style={styles.text_total_Revn}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "AnonymousPro-Regular",
                            marginLeft: -1,
                          }}
                        >
                          Total Revenue
                        </Text>
                      </View>
                      <View style={styles.Rev_calc_cost}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "AnonymousPro-Regular",
                          }}
                          numberOfLines={1}
                          adjustsFontSizeToFit={true}
                          minimumFontScale={0.5}
                          maxFontSizeMultiplier={1.5}
                        >
                          ${totalRevenue.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.third_box}>
              <View style={styles.cost_box}>
                <View style={styles.cost_text_box}>
                  <Text style={styles.cost_text}>
                    C{"\n"}O{"\n"}S{"\n"}T
                  </Text>
                </View>

                <View style={styles.total_cost_box}>
                  <View style={styles.ingredient_box}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "AnonymousPro-Regular",
                      }}
                    >
                      Ingredients
                    </Text>

                    <View style={styles.ingredient_cost_box}>
                      <TextInput
                        style={styles.text_input}
                        placeholder="Type here"
                        placeholderTextColor="#A9A9A9"
                        keyboardType="numeric"
                        onChangeText={(value) =>
                          setIngredientCost(parseFloat(value) || 0)
                        }
                      />
                    </View>
                  </View>

                  <View style={styles.plus_box}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "AnonymousPro-Regular",
                        marginTop: -7,
                        marginRight: 70,
                      }}
                    >
                      +
                    </Text>
                  </View>

                  <View style={styles.other_box}>
                    <View style={styles.other_content_box}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "AnonymousPro-Regular",
                        }}
                      >
                        Others
                      </Text>

                      <View style={styles.other_cost_box}>
                        <TextInput
                          style={styles.text_input}
                          placeholder="Type here"
                          placeholderTextColor="#A9A9A9"
                          keyboardType="numeric"
                          onChangeText={(value) =>
                            setOtherCost(parseFloat(value) || 0)
                          }
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.plus_box}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "AnonymousPro-Regular",
                        marginTop: -7,
                        marginRight: 70,
                      }}
                    >
                      =
                    </Text>
                  </View>

                  <View style={styles.cost_calc_box}>
                    <View style={styles.cost_cont_calc_box}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "AnonymousPro-Regular",
                          marginLeft: -1,
                        }}
                      >
                        Total Cost
                      </Text>
                      <View style={styles.calc_cost}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: "AnonymousPro-Regular",
                          }}
                        >
                          ${totalCost.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.footer_box}>
              <TouchableOpacity
                style={styles.calculate_button}
                onPress={calculateProfit}
              >
                <Text style={styles.button_text}>CALCULATE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Finances;