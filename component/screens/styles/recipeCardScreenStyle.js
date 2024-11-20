// RecipeCardScreenStyle.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFBDE",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFBDE",
  },
  heading_container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  chevron_left: {
    width: "20%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  recipetext_box: {
    width: "60%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  chevron_right: {
    width: "20%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  recepies_text: {
    fontSize: 30,
  },
  chevron_img: {
    width: 45,
    height: 45,
  },
  cards_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    height: 240,
    borderRadius: 20,
    borderWidth: 2,
    overflow: "hidden",
    marginTop: 20,
  },
  recipe_pic: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  recipe_img: {
    width: "100%",
    height: "100%",
  },
  card_footer: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    backgroundColor: "#fa7a98",
  },
  card_text: {
    width: "70%",
    height: 42,
    paddingLeft: 20,
    paddingBottom: 2,
    justifyContent: "center",
    paddingTop:10
  },
  card_title: {
    fontSize: 18,
    fontFamily: "AnonymousPro-Regular",
  },
  card_img: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  heart_img: {
    width: 21,
    height: 18,
  },
});

export default styles;