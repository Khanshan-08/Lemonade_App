import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Linking,
} from "react-native";
import styles from "./styles/buildScreenStyle";
import { useNavigation } from "@react-navigation/native";
import Slider from '@react-native-community/slider';
import { useFonts } from "expo-font";

const Build = ( route) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "AnonymousPro-Bold": require("../fonts/AnonymousPro-Bold.ttf"),
    "AnonymousPro-Regular": require("../fonts/AnonymousPro-Regular.ttf"),
  });

  // Show loading indicator until the font is loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const links = [
    "https://www.backporchbliss.com/sawdust-saturday-lemonade-stand/",
    "https://youtu.be/SfOhEXKAHVs",
    "https://www.hgtv.com/design/make-and-celebrate/handmade/easy-and-portable-lemonade-stand-for-kids",
    "https://thepinterestedparent.com/2016/02/cardboard-lemonade-stand/",
    "https://www.youtube.com/watch?v=eseerJA_gVM&t=169s"
  ];

  const previousScreen = route.params?.previousScreen;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFFBE1" barStyle="dark-content" />

        {/* Header Section */}
        <View style={styles.heading_container}>
          <TouchableOpacity
            style={styles.chevron_left}
            onPress={() => {
              if (previousScreen === "financeScreen") {
                navigation.navigate("financeScreen"); 
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
            <Text
              style={[
                styles.recepies_text,
                { fontFamily: "AnonymousPro-Regular" },
              ]}
            >
              BUILD
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chevron_right}
            onPress={() => navigation.navigate("marketingScreen")}
          >
            <Image
              source={require("./images/chevron-right.png")}
              style={styles.chevron_img}
            />
          </TouchableOpacity>
        </View>

        {/* Content Section with ScrollView */}
        <ScrollView contentContainerStyle={styles.content_container} showsVerticalScrollIndicator={false}>
          {/* first Box */}
          <TouchableOpacity style={styles.box}  onPress={() => Linking.openURL(links[0])}>
            <View style={styles.text_cont}>
              <View style={styles.cont_title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "AnonymousPro-Regular",
                    marginTop: -2,
                    color: "#FFFBDE",
                  }}
                >
                  Classic Stand
                </Text>
              </View>

              <View style={styles.cont_sub_title}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  Traditional look{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  with a sturdy{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  design
                </Text>
              </View>
            </View>

            <View style={styles.image_placeholder}>
              <Image
                source={require("./images/classic_stand.png")}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>

          {/* second Box */}
          <TouchableOpacity style={styles.box}  onPress={() => Linking.openURL(links[1])}>
            <View style={styles.image_placeholder}>
              <Image
                source={require("./images/Rolling_Stand.png")}
                style={styles.img}
              />
            </View>
            <View style={styles.text_cont}>
              <View style={[styles.cont_title, { paddingLeft: 24 }]}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "AnonymousPro-Regular",
                    marginTop: -2,
                    color: "#FFFBDE",
                  }}
                >
                  Rolling Stand
                </Text>
              </View>

              <View style={[styles.cont_sub_title, { paddingRight: 10 }]}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                    textAlign: "right",
                  }}
                >
                  Easily move to{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                    textAlign: "right",
                    paddingRight: 9,
                  }}
                >
                  where your
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                    textAlign: "right",
                    paddingRight: 9,
                  }}
                >
                  customers are
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Fourth Box */}
          <TouchableOpacity style={styles.box} onPress={() => Linking.openURL(links[2])}>
            <View style={styles.text_cont}>
              <View style={styles.cont_title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "AnonymousPro-Regular",
                    marginTop: -2,
                    color: "#FFFBDE",
                  }}
                >
                  Portable Stand
                </Text>
              </View>

              <View style={styles.cont_sub_title}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  Quick setup,
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  perfect for any{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  location
                </Text>
              </View>
            </View>
            <View style={styles.image_placeholder}>
              <Image
                source={require("./images/cartboard.png")}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>

          {/* Third Box */}
          <TouchableOpacity style={styles.box} onPress={() => Linking.openURL(links[3])}>
            <View style={styles.image_placeholder}>
              <Image
                source={require("./images/portable.png")}
                style={styles.img}
              />
            </View>
            <View style={styles.text_cont}>
              <View style={[styles.cont_title, { paddingLeft: 24 }]}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "AnonymousPro-Regular",
                    marginTop: -2,
                    color: "#FFFBDE",
                  }}
                >
                  Cardboard Stand
                </Text>
              </View>

              <View style={[styles.cont_sub_title, { paddingRight: 10 }]}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                    textAlign: "right",
                  }}
                >
                  A great way
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                    textAlign: "right",
                    paddingRight: 9,
                  }}
                >
                  to re-use
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                    textAlign: "right",
                    paddingRight: 9,
                  }}
                >
                  old box’s
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Fifth Box */}
          <TouchableOpacity style={styles.box} onPress={() => Linking.openURL(links[4])}> 
            <View style={styles.text_cont}>
              <View style={styles.cont_title}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "AnonymousPro-Regular",
                    marginTop: -2,
                    color: "#FFFBDE",
                  }}
                >
                  Eco-Stand
                </Text>
              </View>

              <View style={styles.cont_sub_title}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  Rustic look from
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  recycled wood{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "AnonymousPro-Regular",
                    letterSpacing: 1,
                  }}
                >
                  pallets
                </Text>
              </View>
            </View>
            <View style={styles.image_placeholder}>
              <Image source={require("./images/eco.png")} style={styles.img} />
            </View>
          </TouchableOpacity>
          
       
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Build;