import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");

const scale = (size) => (width / 375) * size;

export default function MenuScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "AnonymousPro-Bold": require("../fonts/AnonymousPro-Bold.ttf"),
    "AnonymousPro-Regular": require("../fonts/AnonymousPro-Regular.ttf"),
  });

  // Show loading indicator until the font is loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  try {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFFBDE" barStyle="dark-content" />
          <View style={styles.header_container}>
            <Image source={require("./images/standapp.png")} />
          </View>

          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
              style={{ flex: 1 }}
            >
              <TouchableOpacity
                style={[styles.box, styles.recipesBox]}
                onPress={() => navigation.navigate("recipeCardScreen")}
                activeOpacity={0.9}
              >
                <View style={styles.iconPlaceholder}>
                  <Image
                    source={require("./images/jugimg.png")}
                    style={styles.img}
                  />
                </View>
                <View style={styles.textWrapper}>
                  <View style={styles.boxtitle_container}>
                    <Text
                      style={[
                        styles.boxTitle,
                        {
                          fontFamily: fontsLoaded
                            ? "AnonymousPro-Bold"
                            : "System",
                        },
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      Recipes
                    </Text>
                  </View>
                  <View style={styles.boxsubtitle_container}>
                    <Text
                      style={[
                        styles.boxSubtitle,
                        {
                          fontFamily: fontsLoaded
                            ? "AnonymousPro-Regular"
                            : "System",
                        },
                      ]}
                      numberOfLines={2}
                    >
                      Learn and share
                    </Text>
                    <Text
                      style={[
                        styles.boxSubtitle,
                        {
                          fontFamily: fontsLoaded
                            ? "AnonymousPro-Regular"
                            : "System",
                        },
                      ]}
                      numberOfLines={3}
                    >
                      your favorites
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.box, styles.moneyBox]}
                onPress={() => navigation.navigate("financeScreen")}
              >
                <View style={styles.iconPlaceholder}>
                  <Image
                    source={require("./images/pigy.png")}
                    style={styles.img}
                  />
                </View>
                <View style={styles.textWrapper}>
                  <Text
                    style={[
                      styles.boxTitle,
                      {
                        fontFamily: fontsLoaded
                          ? "AnonymousPro-Bold"
                          : "System",
                      },
                    ]}
                    numberOfLines={1}
                  >
                    Money
                  </Text>
                  <Text style={styles.boxSubtitle} numberOfLines={2}>
                    Basic accounting
                  </Text>
                  <Text style={styles.boxSubtitle} numberOfLines={3}>
                    to maximize earning
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.box, styles.buildBox]}
                onPress={() => navigation.navigate("buildScreen")}
              >
                <View style={styles.iconPlaceholder}>
                  <Image
                    source={require("./images/tool.png")}
                    style={styles.img}
                  />
                </View>
                <View style={styles.textWrapper}>
                  <Text
                    style={[
                      styles.boxTitle,
                      {
                        fontFamily: fontsLoaded
                          ? "AnonymousPro-Bold"
                          : "System",
                      },
                    ]}
                    numberOfLines={1}
                  >
                    Build
                  </Text>

                  <Text style={styles.boxSubtitle} numberOfLines={2}>
                    How to build
                  </Text>
                  <Text style={styles.boxSubtitle} numberOfLines={3}>
                    your own stand
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.box, styles.marketBox]}
                onPress={() => navigation.navigate("marketingScreen")}
              >
                <View style={styles.iconPlaceholder}>
                  <Image
                    source={require("./images/speakers.png")}
                    style={styles.img}
                  />
                </View>
                <View style={styles.textWrapper}>
                  <Text
                    style={[
                      styles.boxTitle,
                      {
                        fontFamily: fontsLoaded
                          ? "AnonymousPro-Bold"
                          : "System",
                      },
                    ]}
                    numberOfLines={1}
                  >
                    Market
                  </Text>

                  <Text
                    style={[
                      styles.boxSubtitle,
                      {
                        fontFamily: fontsLoaded
                          ? "AnonymousPro-Regular"
                          : "System",
                      },
                    ]}
                    numberOfLines={2}
                  >
                    Spread the word
                  </Text>
                  <Text
                    style={[
                      styles.boxSubtitle,
                      {
                        fontFamily: fontsLoaded
                          ? "AnonymousPro-Regular"
                          : "System",
                      },
                    ]}
                    numberOfLines={3}
                  >
                    in your community
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
  } catch (error) {
    console.error("Error rendering StandApp:", error);
    return (
      <View>
        <Text>Error loading Stand App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFBDE",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFBDE", 
    paddingHorizontal: width * 0.05, // 5% of the screen width
    justifyContent: "space-around",
  },
  header_container: {
    width: width * 0.9,
    height: height * 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:34
  },
  header: {
    fontSize: scale(44), // Scale header font size
    fontStyle: "italic", // Use fontStyle for italic text
    marginBottom: height * 0.03,
    textAlign: "center",
    color: "#2A2A2A",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  box: {
    width: "99%", // Fixed width
    height: 127,
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.02,
    borderWidth: 2,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  recipesBox: {
    backgroundColor: "#FF6F8D",
    marginTop: 20,
  },
  moneyBox: {
    backgroundColor: "#29D492",
    marginTop: 20,
  },
  buildBox: {
    backgroundColor: "#CA561C",
    marginTop: 20,
  },
  marketBox: {
    backgroundColor: "#68C6F8",
    marginTop: 20,
  },
  iconPlaceholder: {
    width: 83,
    height: 79,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: width * 0.03, // 3% of the screen width
    borderWidth: 2,
    borderColor: "#333",
  },
  img: {
    width: "100%", // Set width to 100% to fit the placeholder
    height: "94%", // Set height to 100% to fit the placeholder
    resizeMode: "contain",
  },
  textWrapper: {
    flexDirection: "column",
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: "center",
  },
  boxtitle_container: {
    flex: 1,
    height: 30, // Allow it to grow
    justifyContent: "center",
  },

  boxTitle: {
    fontSize: 30, // Scale box title font size
    color: "#000000",
    letterSpacing: 2,
    fontWeight: "normal",
  },
  boxsubtitle_container: {
    flex: 1, // Allows the container to grow and take up space
    paddingVertical: 5,
    marginTop: -19,
  },
  boxSubtitle: {
    fontSize: scale(20),
    color: "#000000",
    flexWrap: "wrap",
    textAlign: "left",
    overflow: "hidden",
    fontFamily: "AnonymousPro-Regular",
  },
});
