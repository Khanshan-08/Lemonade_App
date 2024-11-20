import { StyleSheet } from 'react-native';

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
      fontFamily: "AnonymousPro-Regular",
      letterSpacing: 1,
    },
    chevron_img: {
      width: 45,
      height: 45,
    },
    first_box: {
      width: "100%",
      height: 92,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 17,
      // Shadow for iOS
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      // Elevation for Android
      elevation: 5,
    },
    profit_box: {
      width: "90%",
      height: 92,
      backgroundColor: "#29D492",
      borderRadius: 10,
      borderColor: "#000000",
      borderWidth: 2,
      overflow: "hidden",
      flexDirection: "row",
    },
    profit_text_box: {
      width: "60%",
      height: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    profit_text: {
      width: 179,
      height: 36,
      justifyContent: "center",
    },
    text: {
      fontSize: 36,
      fontFamily: "AnonymousPro-Regular",
      textAlign: "right",
    },
    profit_amount_box: {
      width: "40%",
      height: "100%",
      justifyContent: "center",
    },
    profit_amount: {
      width: 107,
      height: 62,
      backgroundColor: "#FFE853",
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "#000000",
      justifyContent: "center",
      alignItems: "center",
    },
    amount: {
      fontSize: 36,
      fontFamily: "AnonymousPro-Regular",
    },
    second_box: {
      width: "100%",
      height: 259,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 34,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      // Elevation for Android
      elevation: 5,
    },
    revenue_box: {
      width: "90%",
      height: 259,
      alignItems: "center",
      backgroundColor: "#29D492",
      borderWidth: 2,
      borderRadius: 20,
      flexDirection: "row",
    },
    revenue_text_box: {
      width: "20%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    revenue_text: {
      fontSize: 36,
      fontFamily: "AnonymousPro-Regular",
    },
    total_revenue_box: {
      width: "80%",
      height: "100%",
      gap: 9,
    },
    total_sales_box: {
      width: "90%",
      height: 76,
      marginTop: 9,
      justifyContent: "center",
      alignItems: "center",
    },
    cups_text: {
      fontSize: 14,
      fontFamily: "AnonymousPro-Regular",
      marginTop:10
    },
    slider: {
      width: 260,
      height: 30,
      borderWidth:1
    },
    thumb: {
      width: 30,
      height: 30, 
      borderRadius: 15, 
      backgroundColor: '#CFFFEC', 
    },
    price_per_cup_box: {
      width: "90%",
      height: 74,
      justifyContent: "center",
      alignItems: "center",
    },
    total_revenue: {
      width: "87%",
      height: 66,
      backgroundColor: "pink",
      marginLeft: 9,
      borderWidth: 1,
      backgroundColor: "#FFE853",
      borderRadius: 10,
    },
    sale_text_box:{
      height:21,
      width: "90%",
      marginTop:6,
      marginLeft:8
    },
    third_box: {
      width: "100%",
      height: 165,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 34,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      // Elevation for Android
      elevation: 5,
    },
    cost_box: {
      width: "90%",
      height: 165,
      backgroundColor: "#29D492",
      borderWidth: 2,
      borderRadius: 20,
      flexDirection: "row",
    },
    cost_text_box: {
      width: "20%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    cost_text: {
      fontSize: 36,
      fontFamily: "AnonymousPro-Regular",
    },
    total_cost_box: {
      width: "80%",
      height: "100%",
    },
    ingredient_box: {
      width: "90%",
      height: 35,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    ingredient_cost_box: {
      width: "40%",
      height: 35,
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      overflow: "hidden",
    },
    text_input: {
      flex: 1,
      paddingHorizontal: 10,
      fontSize: 16,
    },
    plus_box: {
      width: "90%",
      height: 14,
      justifyContent: "center",
      alignItems: "center",
    },
    cost_calc_box: {
      width: "90%",
      height: 39,
      backgroundColor: "#FFE853",
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems:"center"
    },
    cost_cont_calc_box:{
      width: "90%",
      height:24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems:"center",
    },
    text_total_Revn:{
      width:148,
      height:21,
      paddingLeft:3
    },
    calc_cost: {
      width: 100,
      height: 24,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#FFFFFF",
       justifyContent: "center",
      alignItems:"center"
    },
    Rev_calc_cost:{
      width: 64,
      height: 24,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#FFFFFF",
       justifyContent: "center",
      alignItems:"center"
    },
    other_box: {
      width: "90%",
      height: 35,
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    other_content_box: {
      width: 192,
      height: 35,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    other_cost_box: {
      width: "50%",
      height: 35,
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      overflow: "hidden",
    },
    footer_box: {
      width: "100%",
      height: 47,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,
    },
    calculate_button: {
      width: "90%",
      height: 47,
      backgroundColor: "#FFE853",
      borderWidth: 2,
      borderRadius: 10,
      marginTop:34,
      marginBottom:20,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      // Elevation for Android
      elevation: 5,
    },
    button_text: {
      fontFamily: "AnonymousPro-Regular",
      fontSize: 36,
      color: "#000000",
    },
    sliderTrackContainer: {
      width: 240,
      height: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
      justifyContent: 'center',
      position: 'relative',
    },
    filledTrack: {
      position: 'absolute',
      height: 16,
      backgroundColor: '#FFE853',
      borderRadius: 8,
    },
    thumb: {
      position: 'absolute',
      width: 30,
      height: 30,
      backgroundColor: '#CFFFEC',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#000',
    },
    label:{
      fontSize:20,
      fontFamily: "AnonymousPro-Regular",
      marginBottom:10
    },
    label_slider:{
      fontSize:14,
      fontFamily: "AnonymousPro-Regular",
      marginTop: 10 
    },

    
    track: {
      height: 60, // Custom height for the track
      borderRadius: 5, // Rounded edges for the track
    },
    selected: {
      backgroundColor: '#1EB1FC', // Color for the selected part of the track
    },
    unselected: {
      backgroundColor: '#D3D3D3', // Color for the unselected part of the track
    },
    marker: {
      height: 30, // Custom size for the marker
      width: 30,  // Custom size for the marker
      backgroundColor: 'red', // Color for the marker
      borderRadius: 15, // Rounded marker
      borderWidth: 2, // Optional border
      borderColor: 'white', // Optional border color
    },
  });

  export default styles;