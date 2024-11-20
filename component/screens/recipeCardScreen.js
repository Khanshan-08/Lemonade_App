import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import styles from "./styles/recipeCardScreenStyle.js";

export default function RecipeCardScreen() {
 const [clickedIndexes, setClickedIndexes] = useState([]);
 const [likedCards, setLikedCards] = useState([]);

  const navigation = useNavigation();
  const cards = [
    {
      title: "Country Time",
      subtitle: "Lemonade",
      name: "Country Time",
      sub_name: "Classic Lemonade",
      imgSrc: require("./images/countrytimelemonade.png"),
      ingredients: [
        "1 canister of Country Time lemonade",
        "3 lemons cut, into 21 slices",
        "5 liters of cold water",
      ],
      directions: [
        "Combine Country Time lemonade with water and stir",
        "Pour into cups and add a lemon slice",
        "Taste and serve with ice",
      ],
    },
    {
      title: "Classic Homemade",
      subtitle: "Lemonade",
      name: "CLASSIC",
      sub_name: "Homemade Lemonade",
      imgSrc: require("./images/classic.png"),
      ingredients: [
        "20 lemons",
        "1 cup of white sugar",
        "5 liters of cold water",
      ],
      directions: [
        "Juice lemons into a 2 gallon pitcher",
        "Add sugar and water and stir until sugar dissolve",
        "Taste and serve with ice",
      ],
    },
    {
      title: "Strawberry",
      subtitle: "Lemonade",
      name: "Strawberry",
      sub_name: "Lemonade",
      imgSrc: require("./images/strawberry.png"),
      ingredients: [
        "4lbs fresh strawberries",
        "1.5 cups white sugar",
        "10 cups of cold water",
        "16 lemons",
      ],
      directions: [
        "Remove skin from lemons and stems from strawberrys",
        "Blend all the ingredients",
        "Pour through a sieve and serve with ice",
      ],
    },
    {
      title: "Country Time",
      subtitle: "Pink Lemonade",
      name: "Country Time",
      sub_name: "Pink Lemonade",
      imgSrc: require("./images/pink.png"),
      ingredients: [
        "1 canister of Country Time Pink lemonade",
        "3 lemons cut, into 21 slices",
        "5 liters of cold water",
      ],
      directions: [
        "Combine Country Time Pink lemonade with water and stir",
        "Pour into cups and add a lemon slice",
        "Taste and serve with ice",
      ],
    },
    {
      title: "Mint Lemonade",
      subtitle: "",
      name: "Country Time",
      sub_name: "Lemonade",
      imgSrc: require("./images/mint.png"),
      ingredients: [
        "100 mint leaves + extra to garnish",
        "5 cups white sugar",
        "5 liters of cold water",
        "20 lemons",
      ],
      directions: [
        "Juice lemons and rinse mint leaves",
        "Blend all the ingredients ",
        "Garnish cups with extra mintand serve with ice",
      ],
    },
  ];

  const [fontsLoaded] = useFonts({
    "AnonymousPro-Bold": require("../fonts/AnonymousPro-Bold.ttf"),
    "AnonymousPro-Regular": require("../fonts/AnonymousPro-Regular.ttf"),
  });

  // Show loading indicator until the font is loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const toggleCard = (index) => {
    setClickedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFFBDE" barStyle="dark-content" />
        <View style={styles.heading_container}>
          <TouchableOpacity
            style={styles.chevron_left}
            onPress={() => navigation.navigate("menuScreen")}
          >
            <Image
              source={require("./images/chevron-left.png")}
              style={styles.chevron_img}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.recipetext_box}>
            <Text
              style={[
                styles.recepies_text,
                { fontFamily: fontsLoaded ? "AnonymousPro-Bold" : "System" },
              ]}
            >
              RECIPES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chevron_right}>
            <Image
              source={require("./images/chevron-right.png")}
              style={styles.chevron_img}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.cards_container,
            { paddingBottom: 20 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {cards.map((card, index) => (
            <View style={styles.card} key={index}>
              <TouchableOpacity
                style={styles.recipe_pic}
                onPress={() =>
                  navigation.navigate("RecipeScreen", {
                    imgSrc: card.imgSrc,
                    title: card.title,
                    cardname: card.name,
                    card_sub_name: card.sub_name,
                    ingredients: card.ingredients,
                    directions: card.directions,
                  })
                }
                activeOpacity={0.9}
              >
                <Image
                  source={card.imgSrc}
                  style={styles.recipe_img}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <View style={styles.card_footer}>
                <View style={styles.card_text}>
                  <Text numberOfLines={1} style={styles.card_title}>
                    {card.title}
                  </Text>
                  <Text numberOfLines={2} style={styles.card_title}>
                    {card.subtitle}
                  </Text>
                </View>
                <View style={styles.card_img}>
                  <TouchableOpacity
                   onPress={() => toggleCard(index)}
                  >
                    <Image
                      source={
                          clickedIndexes.includes(index)
                            ? require("./images/heart_fill.png")
                            : require("./images/Path.png")
                        }
                      style={{
                        width: 24,
                        height: 24,
                      }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}