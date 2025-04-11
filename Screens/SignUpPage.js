import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-elements';
import PrimaryText from '../Component/primaryText';
import SecondaryText from '../Component/secondaryText';
import PlaceHolderType from '../Component/placeHolderType';
import ButtonType from '../Component/buttonType';
import onSignInPressed from '../Screens/landingPage';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_APP, FIREBASE_AUTH } from '../firebase';
import { getFirestore,setDoc,doc,collection } from "firebase/firestore";




const SignUpPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // ✅ Separate state for Confirm Password
  const [firstName,setfirstName] = useState('');
  const [lastName,setlastName] = useState('');
  const auth = FIREBASE_AUTH;
  const db = getFirestore(FIREBASE_APP);


  const onSignUpPressed = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword){
         alert('None of the Field can be empty');

    }
    else if (password !== confirmPassword){
         alert('Password is not matched');

    }
    else {
        

      try{
            
             await setDoc(doc(db, "UserData",email), {
               firstName,
               lastName,
               email,
               password,
           });

          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          alert('User data saved in Firestore and user created');

         }
         catch (error) {
          console.error('Error code:', error.code);
          console.error('Error message:', error.message);
          alert(error.message);
      }}}
             
 const  onSignInPressed = () => {
      props.navigation.navigate('SignIn')
 }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.topTextContainer}>
             <PrimaryText   text1 = {'Sign Up'} />
             <SecondaryText text2 = {'Create an account to begin your learing journey'} signUp_createAcc = {true} />
        </View>
        <View style={styles.placeholderContainer}>

           <SecondaryText text2 = {'First Name'} signupPage_Text ={true}/>
           <PlaceHolderType title={'Your Name Here'}  value ={firstName} onChangeText ={setfirstName}  />
           <SecondaryText text2 = {'Last Name'} signupPage_Text ={true}/>
           <PlaceHolderType title={'Your Name Here'}  value ={lastName} onChangeText ={setlastName}  />
           <SecondaryText text2 = {'Email'} signupPage_Text ={true}/>
           <PlaceHolderType title={'Your Email Here'} value={email} onChangeText={setEmail} />
           <SecondaryText text2 = {'Password'} signupPage_Text ={true}/>
           <PlaceHolderType title={'***********'} value={password} onChangeText={setPassword} secure={true} />
           <SecondaryText text2 = {'Confrim Password'} signupPage_Text ={true}/>
           <PlaceHolderType title={'************'} value={confirmPassword} onChangeText={setConfirmPassword} secure={true} /> 
          
         </View>
       
        <View style={styles.iconButtonContainer}>
           <ButtonType title={'Sign up'} fill_longButton={true} onPress = {() => onSignUpPressed()} />
           <View style={styles.signUp_dividerContainer}>
              <Divider style={styles.flexDivider} />
              <Text style={styles.dividerText}> Sign In </Text>
              <Divider style={styles.flexDivider} />
            </View>
            <ButtonType title={'Sign In with Facebook '}  facebook_iconButton={true}/>
            <ButtonType title={'Sign In with Google'} google_iconButton={true} />
          <View style={styles.alreadyhaveContainer}>
            <PrimaryText text1 ={'Alredy have an account?'}  signUpTextin_signIn ={true}     />
            <ButtonType title = {'Sign in Here'} blue_signInhere ={true} onPress = {() => onSignInPressed()}/>
        </View>
        <View style={styles.dividerContainer}>
              <Divider style={styles.dividerStyle} />
        </View>
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, 
   //alignItems:'center',
  },
  mainContainer: {
    flex:1,
   // minHeight: '100%', // Ensures the view is scrollable
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange',
    //paddingBottom: 20, // Ensures space for scrolling
  },
  topTextContainer: {
    width: '100%',
    height: 45, // Use fixed height instead of percentage
    //backgroundColor: 'red',
  },
  placeholderContainer: {
    
   // alignItems:'center',
    width: '100%',
    height: 395,
    //backgroundColor: 'green',
  },
  signUp_buttonStyle:{
    width:'100%',
    height:30,
    marginLeft:13,
    margTop:0,
    backgroundColor:'red',
    //flexDirection:'row',
    //justifyContent:'center',

  },
   signUp_dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   // marginLeft:15,
   // marginVertical: 20,
    width: '90%',
   // backgroundColor:'gray',
    //marginTop:10,

  },
  flexDivider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    
    color: '#777',
    fontWeight: 'bold',
  },
  iconButtonContainer: {
    width: '100%',
    height: 250,
   // backgroundColor: 'orange',
    alignItems:'center',
    marginTop:0,
  },
  alreadyhaveContainer: {
    width: '100%',
    height: 28,
    flexDirection:'row',

   // backgroundColor: 'purple',
  },
  dividerContainer: {
    width: '50%',
    height: 4,
    alignSelf:'center',
    //backgroundColor: 'purple',
  },
  dividerStyle:{
    //flex: 1,
    height: 4,
    backgroundColor: 'black',
  },
});

export default SignUpPage;
