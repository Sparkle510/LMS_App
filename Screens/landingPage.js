import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import PrimaryText from '../Component/primaryText';
import SecondaryText from '../Component/secondaryText';
import ButtonType from '../Component/buttonType';

const LandingPage = props => {
  const onSignInPressed = () => {
    props.navigation.navigate('SignIn')

}
const onSignUpPressed = () => {
  props.navigation.navigate('SignUp')

}
  return (
    <View style={styles.mainContainer}>
      {/* Image View */}
      <View style={styles.imageView}>
        <Image 
          source={require('../assets/Frame.png')} 
        />
      </View>

      {/* Text View */}
      <View style={styles.text1View}>
        <PrimaryText text1 = {'Join IT Group to Kick Start Your Lesson!'} 
                        customStyle = {styles.ItStyle} 
                                />
      </View>
      <View style={styles.text2View}>
            <SecondaryText text2 = {'Join and Learn from our Top Instructors'} customStyle = {styles.joinStyle} />

      </View>
      <View style={styles.signInsignUpView}>

          <ButtonType title = {'Sign In'} fillButton = {true} onPress ={() => onSignInPressed()}/>
          <ButtonType title = {'Sign Up'}  onPress ={() => onSignUpPressed()}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor: 'green',
  },
  imageView: {
    width: '100%',
    height: '50%',
    //backgroundColor: 'gray',
    justifyContent: 'center', // Centers Image vertically
    alignItems: 'center', // Centers Image horizontally
  },
  
  text1View: {
    width: '100%',
    height: 50,
    marginTop:30,
    //backgroundColor: 'red',
  },
  text2View: {
    width: '100%',
    height: 40,
    //backgroundColor: 'orange',
    justifyContent:'center',
  },
  signInsignUpView: {
    width: '100%',
    height: '30%',
    //backgroundColor: 'gray',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:25,
  },
  ItStyle:{
    fontSize:18,
    fontWeight:'bold',
    //color:'blue',
  },  
  joinStyle:{
    fontSize:14,

  },
});

export default LandingPage;
