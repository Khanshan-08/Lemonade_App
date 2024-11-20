import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import styles from "./styles/marketingScreenStyle";

const Marketing = ({ navigation, route }) => {
  const ref = useRef();
  const [ImageUri, setImageUri] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [displayDate, setDisplayDate] = useState("Date");
  const [displayTime, setDisplayTime] = useState("Time");
  const [locationText, setLocationText] = useState("");
  const [bgColor, setBgColor] = useState("#69C5F9");

  // Load fonts
  const [fontsLoaded] = useFonts({
    "AnonymousPro-Bold": require("../fonts/AnonymousPro-Bold.ttf"),
    "AnonymousPro-Regular": require("../fonts/AnonymousPro-Regular.ttf"),
    "cooper-black": require("../fonts/COOPBL.ttf"),
  });

  // Handle loading state
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    setDisplayDate(currentDate.toLocaleDateString()); // Update the displayDate state
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setDate(currentTime);
    setDisplayTime(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleTimePress = () => {
    setShowTimePicker(true);
  };

  const handleShare = async (uri) => {
    if (!(await Sharing.isAvailableAsync())) {
      Alert.alert("Sharing is not available on this platform");
      return;
    }
    try {
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Error sharing", error);
    }
  };

  const saveToStorage = async (uri) => {
    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.status !== "granted") {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    try {
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("MyApp", asset, false);
      Alert.alert("Screenshot saved", "Saved to gallery.");
    } catch (error) {
      console.error("Error saving the file", error);
      Alert.alert("Error", "Unable to save the screenshot.");
    }
  };

  const previousScreen = route.params?.previousScreen;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1}}>
          <StatusBar backgroundColor="#FFF7D9" barStyle="dark-content" />
          <View style={styles.heading_container}>
            <TouchableOpacity
              style={styles.chevron_left}
              onPress={() => {
                if (previousScreen === "BuildScreen") {
                  navigation.navigate("BuildScreen");
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
                MARKETING
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content_box}>
            <ViewShot
              style={{
                width: "90%",
                height: 400, // Set a fixed height for better appearance
                marginTop: 10,
                alignItems: "center",
              }}
              ref={ref}
              options={{ fileName: "flyer", format: "jpg", quality: 0.9 }}
            >
              <View style={styles.img_container}>
                <Image
                  source={require("./images/flyer.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <View style={styles.overlayText}>
                  <TouchableOpacity onPress={handleDatePress} style={{width:80}}>
                    <Text
                      style={[
                        styles.datetime_text,
                        { fontFamily: "cooper-black", color: "#737161" },
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {displayDate}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleTimePress}>
                    <Text
                      style={[
                        styles.datetime_text,
                        { fontFamily: "cooper-black", color: "#737161" },
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {displayTime}
                    </Text>
                  </TouchableOpacity>
                </View>

                {showDatePicker && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
                {showTimePicker && (
                  <DateTimePicker
                    value={date}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                  />
                )}

                <View style={styles.location_box}>
                  <Image
                    source={require("./images/loc.png")}
                    style={styles.loc_img}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="ENTER LOCATION HERE"
                    placeholderTextSize={20}
                    value={locationText}
                    placeholderTextColor="#737161"
                    onChangeText={(text) => setLocationText(text)}
                  />
                </View>
              </View>
            </ViewShot>

            <View style={styles.buttons_box}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: bgColor }]}
                onPressIn={() => setBgColor("pink")}
                onPressOut={() => setBgColor("#69C5F9")}
                onPress={() => {
                  ref.current.capture().then(async (uri) => {
                    setImageUri(uri);
                    await saveToStorage(uri);
                    console.log("Photo saved to gallery successfully!");
                  });
                }}
              >
                <Text style={styles.button_text}>Print</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button,{marginTop: "5%"}]}
                onPress={() => {
                  if (ImageUri) {
                    handleShare(ImageUri);
                  } else {
                    Alert.alert(
                      "No image captured",
                      "Please capture an image first."
                    );
                  }
                }}
              >
                <Text style={styles.button_text}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Marketing;