import { View, Text,StyleSheet,ScrollView } from 'react-native';
import React, { useState } from 'react';
import PlaceHolderType from '../Component/placeHolderType';
import ButtonType from '../Component/buttonType';
import PrimaryText from '../Component/primaryText';
import SecondaryText from '../Component/secondaryText';

const ForgetPassword = props => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const successButtonPress = () => {
        if (!password || !confirmPassword) {
            alert('Both password fields are required.');
           // return;
        }
    
      else  if (password !== confirmPassword) {
            alert('Passwords do not match.');
           // return;
        }
     else {
        props.navigation.navigate('passwordSuccessPage');
     }
    };
  return (
    <ScrollView style = {styles.scrollViewContainer}>
      <View style = {styles.primaryContainer}>
           <PrimaryText   text1 = {'Reset Password'} />
           <SecondaryText text2 = {'At least 9 characters with uppercase and lowercase letters '} signUp_createAcc = {true} />

        <View style ={styles.secondaryContainer}>
           <View style ={styles.newPassword}>
               <SecondaryText text2 = {'New Password'} signupPage_Text ={true}/>

           </View>
           
           <PlaceHolderType title={'***********'} value={password} onChangeText={setPassword} secure={true} />
           <View style ={styles.newPassword}>
                <SecondaryText text2 = {'Confrim Password'} signupPage_Text ={true}/>
           </View>
           <PlaceHolderType title={'************'} value={confirmPassword} onChangeText={setConfirmPassword} secure={true} />

           <ButtonType title={'Done'} fill_longButton={true} onPress = {() => successButtonPress()} />

        </View>
     </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
    scrollViewContainer:{
        flexGrow:1,
    },
    primaryContainer:{
        minHeight: '100%', // Ensures the view is scrollable
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'red',

    },
    secondaryContainer:{
        width:'100%',
        height:'50%',
        marginTop:40,
        alignItems:'center',
       // backgroundColor:'green',
    },
    newPassword:{
        width:'100%',
        alignItems:'flex-start',
    },
})

export default ForgetPassword;