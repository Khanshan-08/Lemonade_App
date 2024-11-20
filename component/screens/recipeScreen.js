import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/recipeScreenStyle.js";

export default function RecipeScreen() {
  const route = useRoute();
  const { imgSrc, title, cardname, ingredients, directions, card_sub_name } = route.params;
  const navigation = useNavigation();

 

  const recipe_Price = 14.00;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fa7a98" barStyle="dark-content" />
        <View style={styles.heading_container}>
          <TouchableOpacity
            style={styles.chevron_left}
            onPress={() => navigation.navigate("recipeCardScreen")}
          >
            <Image
              source={require("./images/ArrowLeft.png")}
              style={styles.chevron_img}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.recipetext_box}>
            <Text style={styles.recepies_text}>{cardname.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.text_container}>
          <Text style={styles.text}>{card_sub_name}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.lemonade_img_container}>
            <View style={styles.lemonade_img}>
              <Image source={imgSrc} style={styles.img} />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.ingredients_box}>
            <View style={styles.heading_text}>
              <View style={styles.Ingredients_text}>
                <Text style={{ fontSize: 20, fontFamily: "AnonymousPro-Bold", }}>
                  Ingredients
                </Text>
              </View>
              <View style={styles.Ingredients_text}>
                <Text style={{fontFamily: "AnonymousPro-Regular",fontSize:17 }}>(25 Servings)</Text>
              </View>
            </View>

              <ScrollView style={styles.ingredientlist_box} showsVerticalScrollIndicator={false}>
                {ingredients.map((ingredient, index) => (
                  <View style={styles.ingredientlist} key={index}>
                    <View style={styles.tick_img_box}>
                      <Image source={require("./images/check-mark.png")} />
                    </View>
                    <View style={styles.list_box}>
                      <Text style={styles.list_text}>{ingredient}</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={styles.directions_box}>
              <View style={styles.heading_text}>
                <Text style={styles.heading}>Directions</Text>
              </View>

              <ScrollView style={styles.ingredientlist_box} showsVerticalScrollIndicator={false}>
                {directions.map((direction, index) => (
                  <View style={styles.ingredientlist} key={index}>
                    <View style={styles.tick_img_box}>
                      <Image source={require("./images/one.png")} />
                    </View>
                    <View style={styles.list_box}>
                      <Text style={styles.list_text}>{direction}</Text>
                    </View>
                    
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <View style={styles.button_box}>
          <TouchableOpacity
            style={styles.footer_button}
            onPress={() => navigation.navigate("financeScreen",{
              recipePrice:recipe_Price
            })}
          >
            <Text style={styles.footer_button_text}>
              Continue to Finance Planning
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}