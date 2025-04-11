import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React,{useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from "../redux/slices/authSlice";
import SettingOption from '../Component/settingOption'


const SettingScreen = props => {
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authDispatch = useDispatch();
  const authHandler = useCallback(() => authDispatch(logout()),[authDispatch])
  const onIconPressed = () => {
    props.navigation.navigate('NotificationPage')
}
const logoutPressed = () => {
  props.navigation.navigate('SignIn')
  authHandler();

}
  return (
    <>
      <View style={styles.bellsettngIcon}>
        <Text style={styles.userStatus}>
             User is {isLoggedIn ? "Logged In" : "Logged Out"}
        </Text>
        <TouchableOpacity >
          <Image source={require('../assets/Gear.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onIconPressed()}>
          <Image source={require('../assets/Doorbell.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.secContainer}>
          <SettingOption optionImage={require('../assets/Customer.png')} optionName={'Edit Profile'} profileImage={true} firstOption={styles.editProfileStyle} />
          <SettingOption optionImage={require('../assets/MagneticCard.png')} optionName={'Payment Option'} firstOption={styles.paymentStyle} />
          <SettingOption optionImage={require('../assets/TermsConditions.png')} optionName={'Terms And Condition'} firstOption={styles.conditionStyle} />
          <SettingOption optionImage={require('../assets/Headset.png')} optionName={'Help Center'} firstOption={styles.headStyle} />
          <SettingOption optionImage={require('../assets/ForwardArrow.png')} optionName={'Invite Friends'} firstOption={styles.forwardStyle} />
          <SettingOption optionImage={require('../assets/Logout.png')} optionName={'Logout'} 
                onPress ={logoutPressed}   firstOption={styles.logoutStyle} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create ({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'red',

        //backgroundColor:'red',
    },
    userStatus:{
      fontSize:18,
      fontFamily:'italic',
      marginRight:35,
      //fontWeight:'bold',
    },
    bellsettngIcon:{
      width:'100%',
      marginTop:10,
     // backgroundColor:'red',
      flexDirection:'row',
     // alignItems:'flex-end',
      justifyContent:'flex-end',

    },
    secContainer:{
        width:'90%',
        height:400,
        backgroundColor:'#E5EAF4',
        alignItems:'center',
        justifyContent:'center',

        
    },
    editProfileStyle:{
      fontSize:20,
      marginLeft:147,
    },
    paymentStyle:{
      fontSize:20,
      marginLeft:109,

    },
    conditionStyle:{
      fontSize:20,
      marginLeft:75,

    },
    headStyle:{
      fontSize:20,
      marginLeft:140,
    },
    forwardStyle:{
      fontSize:20,
      marginLeft:130,
    },
    logoutStyle:{
      fontSize:20,
      marginLeft:175,
    },
})

export default SettingScreen;