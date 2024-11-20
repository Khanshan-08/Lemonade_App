import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFBDE",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFBE1",
  },
  box: {
    width: "85%",
    height: 119,
    backgroundColor: "#CA561CD4", 
    borderWidth: 2,
    borderRadius: 19,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 14,
    borderColor: "black",
    justifyContent: "space-between", 
     // Shadow properties for iOS
     shadowColor: "#000",           
     shadowOffset: {                
       width: 0,                    
       height: 4,                   
     },
     shadowOpacity: 0.3,           
     shadowRadius: 6,              
     elevation: 10,   
  },
  text_cont:{
    width:200,
    height:88,
  },
  cont_sub_title:{
    width:"100%",
    height:63,
  },
  cont_title:{
    width: "100%",
    height: 20,
  },
  heading_container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: width * 0.10,  // Responsive text size based on screen width
  },
  img: {
    width: "100%",
    height: "100%",
  },
  chevron_img: {
    width: 45,
    height: 45,
  },
  content_container: {
    paddingVertical: 20,
    alignItems: "center",
    gap: 14,
  },
  image_placeholder: {
    width: 81, 
    height: 104,
    borderRadius: 10,
    marginRight: 15,
  },
  text_container: {
    flex: 1,
    width: 218,
    height: 88,
    textAlign: "right",
    alignSelf: "flex-end",
    marginTop: -10,
  },
  Rolling_text_container: {
    width: 218,
    height: 88,
    textAlign: "left",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginTop: 10,
  },
  boxTitle: {
    fontWeight: '700',
    fontSize: 20,
    fontFamily: "AnonymousPro-Regular",
    color: "#FFFFFF", 
    marginTop: 4,
  },
  boxDescription: {
    fontSize: width * 0.05, 
    color: "black", 
    marginTop: 5,
  },
});

export default styles;