import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFBDE",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF7D9",
  },
  heading_container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:10
  },
  chevron_left: {
    width: "20%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  recipetext_box: {
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  recepies_text: {
    fontSize: 36,
  },
  chevron_img: {
    width: 53,
    height: 45,
  },
  content_box: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    overflow: "hidden",
  },
  img_container: {
    width: "100%",
    height: "100%",
    marginTop: 10,
    position: "relative", // Set position relative for the container
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  overlayText: {
    width: 120,
    height: 70,
    position: "absolute",
    top: "67%",
    left: "67%",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 5,
  },
  datetime_text: {
    color: "#737161",
    fontSize: 24,
    marginTop: 8,
  },overlayText: {
    width: 120,                    
    height: 70,
    position: "absolute",
    top: "67%",
    left: "67%",
    textAlign: "center",
    padding: 5,
    overflow: "hidden",           
    justifyContent: "center",    
  },
  datetime_text: {
    color: "#737161",
    fontSize: 18,                 
    textAlign: "center",
    flexShrink: 1,                 
    marginTop: 8,
  },
  dateTimeButton: {
    marginVertical: 10, 
    padding: 10,
    backgroundColor: "#f0f0f0", 
    borderRadius: 8, 
    width: 200, 
    alignItems: "center", 
  },
  datetime_text: {
    fontSize: 18,
  },
  location_box: {
    position: "absolute",
    top: "82%",
    left: "46%",
    transform: [{ translateX: -100 }],
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    
  },
  loc_img: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontFamily: "cooper-black",
    paddingHorizontal: 0,
    color: "#737161",
    fontSize:18,
    marginLeft:-10
  },
  buttons_box: {
    width: "86%",
    height: "40%",
  },
  button: {
    width: "100%",
    height: 79,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69C5F9",
    marginBottom:20
  },
  button_text: {
    fontSize: 30,
    color: "#fff",
    letterSpacing: 3,
  },
});

export default styles;
