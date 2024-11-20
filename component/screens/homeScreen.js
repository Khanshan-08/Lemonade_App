import React from "react";
import { View, StyleSheet, ImageBackground, StatusBar, Dimensions, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font"; 

export default function HomeScreen() {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");

  // Load the custom font
  const [fontsLoaded] = useFonts({
    'AnonymousPro-Bold': require('../fonts/AnonymousPro-Bold.ttf'), 
  });

  // Show loading indicator until the font is loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#FFFBDE" />
      <View style={Styles.img_container}>
        <ImageBackground
          source={require("./images/homeimg.png")}
          style={Styles.backgroundImage}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={Styles.start_button}
            onPress={() => navigation.navigate("menuScreen")}
          >
          <Text style={[Styles.buttonText, { fontFamily: fontsLoaded ? 'AnonymousPro-Bold' : 'System' }]}>START</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFFBDE"
  },
  img_container: {
    width: "100%",
    height: 500,
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  start_button: {
    width: 200,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFE853",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "45%",
    borderWidth: 2
  },
  buttonText: {
    color: "#000000",
    fontSize: 40,
    fontFamily: 'AnonymousPro-Bold'
  },
});