import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import PrimaryText from '../Component/primaryText';

import ButtonType from '../Component/buttonType';
import SecondaryText from './secondaryText';

const InformationBox = props => {
  return (
    <View style={styles.mainContainer}>
     
      {/* Image positioned between both containers */}
      
          <Image source={require('../assets/abc.png')} style={styles.image} />
        

        {props.contactScreenValue &&(
          <View>
          <View style={styles.secContainer}>
            <View style={styles.tag_NameContainer}>
              
               <PrimaryText text1={props.nameHere} name_Here={true}/ >
               <PrimaryText text1={props.tag} tagLine={true} />
        </View>

          <View style={styles.penContainer}>
            <Image source={require('../assets/pencil.png')} style ={styles.penImgStyle}/>
           </View>
        </View>
        </View>
      )}
      <View style = {styles.aboutIntroContainer}>
        {props.aboutIntroValue &&(
         <View>
         <View style = {styles.aboutContainer}>
            <PrimaryText text1={'About Me'} aboutMe ={true} />
         </View>
         <View style = {styles.introductionContainer}>
                 <PrimaryText text1 ={props.introText}
                                long_Text ={true}
                                   />
         </View>
            <PrimaryText text1={'My Skill'} aboutMe ={true} />
          <View style = {styles.buttonContainer}>
               <ButtonType  title = {'UI/UX'} button_for_UI = {true} />
                <ButtonType  title = {'Graphic Design'} button_for_ContactGraphic = {true} />
                <ButtonType  title = {'Figma'} button_for_Figma = {true}/>
          </View>
        <View style ={styles.videoButton}>
               <ButtonType  title = {'Video Editing'} button_for_ContactGraphic = {true} />

        </View>
        </View>
        )}
           
      </View>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor: 'gray',
    alignItems: 'center',
   //justifyContent: 'center',
  },
  secContainer: {
    width: '90%',
    height: 50,
   // backgroundColor:'gray',
    marginTop:100,
    backgroundColor: '#E5EAF4',
    flexDirection: 'row',
    
    //position: 'relative', // Allows the image to overlap properly
  },
  tag_NameContainer: {
    width: '62%',
    height: 45,
    //backgroundColor: 'red',
    alignItems: 'flex-end',
  },
  penContainer: {
    width: '38%',
    height: 40,
    alignItems: 'flex-end',
    //backgroundColor: 'gray',
  },
  penImgStyle:{
    width:20,
    height:20,
    marginTop:10,
    marginRight:5,
  },
  image: {
    position: 'absolute', // Enables overlapping effect
    top: '10%', // Adjust so half remains in mainContainer and half in secContainer
    width: 60, // Adjust size as needed
    height: 60, // Adjust size as needed
   // alignSelf: 'center', // Centers the image horizontally
    zIndex: 1, // Keeps image on top of other views
  },
  aboutIntroContainer:{
      width:'90%',
      height:350,
      //marginTop:90,
      //alignItems:'center',
     backgroundColor:'#E5EAF4',
    // backgroundColor:'orange',

  },
  aboutContainer:{
    width:'50%',
    height:35,
    marginTop:20,
    //backgroundColor:'red',
    //marginLeft:10,
    //flexDirection:'column',
  },
  introductionContainer:{
         width:'100%',
         height:120,
      //   backgroundColor:'gray',
  },
  buttonContainer:{
    flexDirection:'row',
    width:'100%',
    height:50,
    justifyContent:'center',
    //backgroundColor:'gray',
  },
  videoButton:{
      width:'100%',
      marginTop:10,
  },
  homeScreenContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'purple',
  },
  settingContainer:{
    width:'100%',
    height:450,
    marginTop:90,
    //height:150,
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'orange',
  },
  optionContainer:{
    width: '90%',
    height:50,
    flexDirection:'row',
    backgroundColor:'green',
    // backgroundColor:'#E5EAF4',
     borderRadius:10,
     borderWidth:2,
     borderColor:'#E5EAF4',
     borderCurve:10,
     alignItems:'center',
     //marginTop:10,
  },
  optionImgStyle:{
     marginLeft:10,

  },
  arrowContainer:{
    width:'94%',
    justifyContent:'flex-end',
  },
});

export default InformationBox;
