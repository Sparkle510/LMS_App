import { Pressable, Text, StyleSheet, TouchableOpacity, View ,Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const ButtonType = (props) => {
    let buttonStyle, textStyle;
    
    if (props.fillButton) {
        buttonStyle = styles.fillButtonContainer;
        textStyle = styles.text1;
    } 
    else if (props.fill_longButton) {
        buttonStyle = styles.fill_longButtonContainer;
        textStyle = styles.text1;
    } 
    else if (props.blue_signUphere) { //for Sign In last text
        buttonStyle = styles.blue_signUp
        textStyle = styles.text4;
    } 
    else if (props.blue_signInhere){ // for Sign up Page last Text
        buttonStyle = styles.blue_signUp
        textStyle = styles.text5;
    }
    else if (props.facebook_iconButton){
        buttonStyle = styles.fill_longiconButtonContainer;
        textStyle = styles.text1;

    }
    else if (props.google_iconButton){
        buttonStyle = styles.google_longiconButtonContainer;
        textStyle = styles.text2;

    }
    else if (props.button_for_Graphic){
        buttonStyle = styles.style_of_Graphic_button;
        textStyle = styles.text2;

    }
    else if (props.button_for_UI || props.button_for_Figma){ // For HomeScreen 
        buttonStyle = styles.style_UI_Ux_button;
        textStyle = styles.text2;
    }

    
    else if (props.button_for_ContactGraphic){ //For Contact Screen : Graphic Button
        buttonStyle = styles.contactGraphicButton;
        textStyle = styles.text2;

    }
    else if (props.adobeButton || props.logoButton){ // For OverviewScreen 
        buttonStyle = styles.adobelogoStyle;
        textStyle = styles.text2;
    }
    else if (props.adobePhoto){ //For Contact Screen : Graphic Button
        buttonStyle = styles.adobephotoStyle;
        textStyle = styles.text2;

    }
    else {
        buttonStyle = styles.blankButton;
        textStyle = styles.text2;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
                <View style={styles.buttonContent}>
                    {props.facebook_iconButton && (
                        <Ionicons name="logo-facebook" size={24} color="white" style={styles.iconStyle} />
                    )}
                    {props.google_iconButton && (
                        <Image   source={require('../assets/images.jpg')} style ={styles.googleImgStyle} /> // Path to your image
                    )}
                    <Text style={textStyle}>{props.title}</Text>
                </View>

                
                
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    fillButtonContainer: {
        height: 50,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginTop:10,
        marginLeft: 5,
        backgroundColor: 'blue',
    },
    blankButton: {
        height: 50,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text1: {
        fontStyle: 'italic',
        color: 'white',
        marginLeft: 5, // Adds space between the icon and text
    },
    text2: {
        fontStyle: 'italic',
        color: 'black',
        marginLeft: 5,
    },
    text3: {
        color: 'blue',
    },
    text4: {
        marginBottom:14,
        color: 'blue',
    },
    text5: {
       // marginBottom:5,
        color: 'blue',
    },
    fill_longButtonContainer: {
        height: 49,
        width: '93%',
        justifyContent: 'center',
        alignItems: "center", // Align content to the left
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 20,
        //marginLeft: 13,
        backgroundColor:'blue',
    },
    fill_longiconButtonContainer: {
        height: 50,
        width: '93%',
        justifyContent: 'center',
        alignItems: "flex-start", // Align content to the left
        borderRadius: 10,
        borderWidth: 2,
       // marginTop: 10,
        //marginLeft: 10,
        backgroundColor:'blue',
    },
    google_longiconButtonContainer:{
         height: 50,
         width: '93%',
        justifyContent: 'center',
        alignItems: "flex-start", // Align content to the left
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 6,
       // marginLeft: 10,
        backgroundColor:'white',
    },
    buttonContent: {
       // backgroundColor:'red',
        flexDirection: 'row', // Ensures icon and text are in the same row
        alignItems:'center', // Aligns them vertically in the center
    },
    iconStyle: {
          marginLeft: 5,
          marginRight:20,

       // alignSelf:'flex-start',
    },
    googleImgStyle:{
          width:20,
          height:20,
          marginLeft: 5,
          marginRight:20,
    },
    blue_signUp:{
        justifyContent:'center',
        marginTop:6,
        
    },
    style_UI_Ux_button:{
        height: 44,
        width: 95,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft:4,
    },
    style_of_Graphic_button:{
        height: 44,
        width: 145,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft:5,
    },
    contactGraphicButton:{ //For Contact button : Graphic
        height: 44,
        width: 122,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft:5,

    },
    adobelogoStyle:{
        height: 45,
        width: 95,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft:4,
    },
    adobephotoStyle:{
        height: 44,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft:5,
    },
    
});

export default ButtonType;
