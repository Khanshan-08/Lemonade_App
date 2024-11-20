import { StyleSheet,Platform } from "react-native";

const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: "#fa7a98",
    },
    container: {
      flex: 1,
      backgroundColor: "#fa7a98",
      justifyContent: "flex-start",
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    heading_container: {
      width: "100%",
      height: 36,
      flexDirection: "row",
    },
    chevron_left: {
      width: "20%",
      height: 36,
      justifyContent: "center",
      alignItems: "center",
    },
    recipetext_box: {
      width: "80%",
      height: 36,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    recepies_text: {
      fontSize: 30,
      fontFamily: "AnonymousPro-Bold",
      textAlign: "center",
      flexShrink: 1,
      letterSpacing: 3,
    },
    chevron_img: {
      width: 28,
      height: 32,
    },
    text_container: {
      width: "100%",
      minHeight: 30,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    text: {
      fontSize: 24,
      fontFamily: "AnonymousPro-Regular",
      textAlign: "left",
      flexShrink: 1,
      flexWrap: "wrap",
    },
    lemonade_img_container: {
      width: "100%",
      height: 240,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 26,
    },
    lemonade_img: {
      width: "90%",
      height: 235,
      borderRadius: 20,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 6,
      elevation: 8,
    },
    img: {
      width: "100%",
      height: "100%",
      borderRadius: 24,
    },
    box: {
      width: "100%",
      marginTop: 20,
    },
    ingredients_box: {
      width: "90%",
      marginTop: 14,
      marginLeft: 16,
    },
    heading_text: {
      width: "100%",
      flexDirection: "row",
     // justifyContent: "space-between",
    },
    Ingredients_text: {
      width: 136,
      height: 30,
      justifyContent: "center",
    },
    heading: {
      fontSize: 20,
      fontFamily: "AnonymousPro-Bold",
    },
    servings: {
      fontFamily: "AnonymousPro-Regular",
    },
    ingredientlist_box: {
      maxHeight: 150, 
      overflow: "hidden",
      paddingBottom: 20,
    },
    ingredientlist: {
      flexDirection: "row",
      marginTop: 9,
      alignItems: "center",
    },
    tick_img_box: {
      width: 24,
      height: 24,
    },
    list_box: {
      width: "90%",
      paddingLeft: 7,
    },
    list_text: {
      fontFamily: "AnonymousPro-Regular",
      fontSize: 20,
    },
    directions_box: {
      width: "90%",
      marginTop: 14,
      marginLeft: 16,
      paddingBottom: 20, 
    },
    button_box: {
      width: "100%",
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    footer_button: {
      width:  "90%",
      height: 43,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#7dccfd",
      borderRadius: 10,
    },
    footer_button_text: {
      fontWeight: "bold",
      fontSize: 17,
    },
  });

  export default styles;