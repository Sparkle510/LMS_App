import { Text, StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native'; 
import React, { useState,useEffect,useCallback} from 'react';
import { Divider } from 'react-native-elements';
import PrimaryText from '../Component/primaryText';
import SecondaryText from '../Component/secondaryText';
import ButtonType from '../Component/buttonType';
import PlaceHolderType from '../Component/placeHolderType';
import { FIREBASE_AUTH } from '../firebase';
import {signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";



const SignInPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authDispatch = useDispatch()
  
  const authHandler = useCallback (() => authDispatch(login()),[authDispatch]);
  

  const _storeUserCredential = async () =>  {
          try{
              await AsyncStorage.setItem('email', email)
              await AsyncStorage.setItem('password', password)
  
          }
          catch(error){
              console.log('Store', error)
          }}
      const _getUserCredential  = async () =>{
          try{
               let email =   await AsyncStorage.getItem('email')
               let password = await AsyncStorage.getItem('password')
               console.log(email,password)
               return{email,password}
          }
          catch(error){
              console.log('Error in get',error)
  
          }}
  
          useEffect(() => {
              const fetchUserCredentials = async () => {
                  const _userCredentialforSignin = await _getUserCredential();
                  if (_userCredentialforSignin) {
                      setEmail(_userCredentialforSignin.email);
                      setPassword(_userCredentialforSignin.password);
                  }
              };
      
              fetchUserCredentials();
          }, []);

  const onSignUpPressed = async () => {
    
    
       props.navigation.navigate('SignUp')
  
     }
     const onSignInPressed = async () => {
               
               try {
                        const userCredential = await signInWithEmailAndPassword(auth, email, password);
                         const user = userCredential.user;          
                        props.navigation.navigate('Home');
                        await _storeUserCredential(); 
                        authHandler()
               } catch (error) {
                 console.error("Sign-in error:", error.message);
               }};


  const onForgetPressed = () => {
    props.navigation.navigate('forgetPasswordPage');
  };

  return (
    
    <ScrollView 
         
             keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
         <View style={styles.mainContainer}>
          
          <View style={styles.toptextContainer}>
              <Text style={styles.userStatus}>
                   User is {isLoggedIn ? "Logged In" : "Logged Out"}
                 </Text>
            <SecondaryText text2={'Please sign in with your account'} />
          </View>
         
          <View style={styles.placeholderContainer}>
            <PlaceHolderType title={'Email Here'} value={email} onChangeText={setEmail} />
            <View style={styles.passwordContainer}>
              <PlaceHolderType title={'Password'} value={password} onChangeText={setPassword} secure={true} />
              <TouchableOpacity onPress={onForgetPressed} style={styles.forgetpasswordContainer}>
                <Text style={styles.forgetText}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <ButtonType title={'Sign In'} fill_longButton={true} onPress ={ () => onSignInPressed()} />

            <View style={styles.dividerContainer}>
              <Divider style={styles.flexDivider} />
              <Text style={styles.dividerText}> Sign In </Text>
              <Divider style={styles.flexDivider} />
            </View>
          </View>
     

          <View style={styles.facebookgoogleContainer}>
          <ButtonType title={'Sign In with Facebook '}  facebook_iconButton={true}/>
          <ButtonType title={'Sign In with Google'} google_iconButton={true} />


          </View>
          <View style={styles.bottomtextcontainer}>
            <PrimaryText text1 ={'Didn’t have an account?'}  signUpTextin_signIn ={true}     />
            <ButtonType title = {'Sign up Here'} blue_signUphere ={true} onPress = {() => onSignUpPressed()}/>

            
          </View>

          <View style={styles.lastDivider}>
                  <Divider style={styles.dividerStyle} />
          </View>

          

        </View>
    
  </ScrollView >

    
  );
};

const styles = StyleSheet.create({
  practice:{
     width:'100%',
     height:'30%',
     backgroundColor:'red',
  },
  userStatus:{
    fontSize:18,
    fontFamily:'italic',
    //fontWeight:'bold',
  },
  backgroundContainer:{
    width:'22%',
    height:'90%',
    alignSelf:'center',
    borderCurve:'circular',
    //backgroundColor:'orange',
  },
  flexContainer: {
    flex: 1,
  },
  
  mainContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    //alignSelf:'center',

  },
  toptextContainer: {
    width: '100%',
    height: '25%',
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  placeholderContainer: {
    width: '100%',
    height:'40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    //backgroundColor:'green',
  },
  passwordContainer: {
    width: '100%',
    alignItems: 'center',
  },
  forgetpasswordContainer: {
   alignSelf:'flex-end',
   marginRight:22,
  },
  forgetText: {
    color: '#8E8787',
    fontSize: 12,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%',
    //backgroundColor:'gray',
    marginTop:10,

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
  facebookgoogleContainer: {
    width: '100%',
    height: '30%',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor: 'gray',
    marginLeft:10,
    marginTop:40,
    //marginBottom:10,
  },
  bottomtextcontainer: {
    width: '100%',
    height: '8%',
    flexDirection:'row',
   // marginBottom:15,
   // backgroundColor: 'red',
  },
  lastDivider: {
    width:'50%',
    //height:'20%',
    justifyContent:'center',
    alignSelf:'center',
    //backgroundColor:'orange',
  },
  dividerStyle:{
    flex: 1,
    height: 3,
    backgroundColor: 'black',
  },
});

export default SignInPage;
