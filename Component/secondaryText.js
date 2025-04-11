
import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const SecondaryText = ({ customStyle, ...props }) => {
    let textStyle = [styles.defaultText];
    if (customStyle){
        textStyle = [styles.defaultText,customStyle]
    }
    else if (props.landingPageSecText){
        textStyle = [styles.defaultText,styles.landingPageStyle];
    }
    else if (props.signupPage_Text){// For place Holder uper text
        textStyle = [styles.defaultText,styles.signUp_p_NameStyle];
    }
    else if (props.signUp_createAcc){ // For Create an account text on Sign Up page
        textStyle = [styles.defaultText,styles.createAccountStyle];
    }
    else if (props.succesPasswordSecText){// For Transaction view on passwordSuccessPage lower text
        textStyle = [styles.defaultText,styles.succesPasswordText];
    }
    else if (props.timeValue){// For Transaction successful view on homeNotification lower text
        textStyle = [styles.defaultText,styles.timeTextStyle];
    }
    else if (props.settingOption){// For setting option in the homeScreen for the setting options
        textStyle = [styles.defaultText,styles.optionStyle];
    }
    else if (props.instructor_Name){// For overViewScreen in the homeScreen for the   instructor_Name
        textStyle = [styles.defaultText,styles.instructor_NameStyle];
    }
    else if (props.dollarVal){// For overViewScreen in the homeScreen for the   instructor_Name
        textStyle = [styles.defaultText,styles.dollarStyle];
    }
    else if (props.paymentVal){// For overViewScreen in the homeScreen for the   Payemt Text
        textStyle = [styles.defaultText,styles.paymentStyle];
    }
    else {
        textStyle = [styles.defaultText,styles.normalText];
    }
    return(
        <Text style ={textStyle}>{props.text2}</Text>
    )

}
 
const styles = StyleSheet.create({
          
    defaultText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
      },
   
   
    landingPageStyle:{
        fontSize:17,
        fontStyle:'italic',

    },
    normalText:{
         fontStyle:'italic',
         fontSize:18,
         textAlign:'center',
         marginLeft:22,
    },
    signUp_p_NameStyle:{
         fontStyle:'italic',
         fontSize:14,
         textAlign:'left',
         marginLeft:22,
    },
    createAccountStyle:{
        fontStyle:'italic',
        fontSize:14,
        textAlign:'left',
        marginLeft:16,
   },
   succesPasswordText:{
    fontSize:10,
    fontFamily:'italic',
   },
   timeTextStyle:{
       fontSize:12,
       marginLeft:133,
   },
   optionStyle:{
    fontSize:14,
    fontFamily:'italic',
    marginLeft:10,
   },
   instructor_NameStyle:{
     fontSize:10,
     fontFamily:'italic',
     marginLeft:10,

   },
   dollarStyle:{
       fontSize:12,
       fontWeight:'bold',
       marginTop:5,
       marginRight:20,
   },
   paymentStyle:{
    fontSize:9,
    fontFamily:'italic',
    marginRight:10,
   },
})
export default SecondaryText;