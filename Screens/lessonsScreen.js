import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react';
import PrimaryText from '../Component/primaryText';
import ButtonType from '../Component/buttonType';
import { Divider } from 'react-native-elements';


const LessonsScreen = props => {
  return (
    <View style = {styles.mainContainer}>
       <View style = {styles.chapterContainer}>
        <PrimaryText text1 = {'Chapter1: What is Graphic Designing'} />
       </View>
      <View style = {styles.secContainer}>
           <View style = {styles.infoContainer}>
              <Image  source = {require('../assets/Circled Play.png')} style = {styles.imageStyle}/>
              <PrimaryText text1 = {'Chapter1: What is Graphic Designing'}  lessonDesign = {true} />
            </View>
            <View style = {styles.infoContainer}>
              <Image  source = {require('../assets/View Details.png')} style = {styles.imageStyle}/>
              <PrimaryText text1 = {'Chapter1: What is Graphic Designing'}  lessonDesign = {true} />
            </View>
            <View style = {styles.infoContainer}>
              <Image  source = {require('../assets/Circled Play.png')} style = {styles.imageStyle}/>
              <PrimaryText text1 = {'Chapter1: What is Graphic Designing'}  lessonDesign = {true} />
            </View>
            <View style = {styles.infoContainer}>
              <Image  source = {require('../assets/View Details.png')} style = {styles.imageStyle}/>
              <PrimaryText text1 = {'Chapter1: What is Graphic Designing'}  lessonDesign = {true} />
            </View>
      </View>
      <View style = {styles.chapterContainer}>
        <PrimaryText text1 = {'Chapter1: What is Graphic Designing'} />
       </View>
       <View style = {styles.chapterContainer}>
        <PrimaryText text1 = {'Chapter1: What is Graphic Designing'} />
       </View>
       <View style = {styles.chapterContainer}>
        <PrimaryText text1 = {'Chapter1: What is Graphic Designing'} />
       </View>
       <ButtonType title={'Get Enroll'} fill_longButton={true}  />
       <View style={styles.dividerContainer}>
              <Divider style={styles.dividerStyle} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    //backgroundColor:'green',
    alignItems:'center',
    
  },

  chapterContainer:{
    width:'90%',
    height:49,
    marginTop:8,
    borderRadius:10,
    justifyContent:'center',
    backgroundColor:'#E5EAF4',
  },
  secContainer:{
    width:'90%',
    height:155,
    marginTop:10,
    borderRadius:10,
    backgroundColor:'#E5EAF4',
  },
  infoContainer:{
    width:'100%',
    height:38,
    flexDirection:'row',
    alignItems:'center',
   // backgroundColor:'red',
    },
    imageStyle:{
      width:40,
      height:40,
    },
  dividerContainer: {
    width: '40%',
    height: 4,
    alignSelf:'center',
    marginTop:2,
    borderRadius:20,
    
    //backgroundColor: 'purple',
  },
  dividerStyle:{
    //flex: 1,
    height: 4,
    backgroundColor: 'black',
  },
})
export default LessonsScreen;