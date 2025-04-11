import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import PrimaryText from '../Component/primaryText';
import SecondaryText from '../Component/secondaryText';
import LecturesInfo from '../Component/lecturesInfo';
import ButtonType from '../Component/buttonType';
import { Divider } from 'react-native-elements';



const OverviewScreen = props => {
  const ongetEnrollPressed = () => {
     props.navigation.navigate('EnrollPage')
  }
  const fullText =
    'A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. Another important category of definitions is the class of ostensive definitions, which convey the meaning of a term by pointing out examples';
  
  const previewText = fullText.substring(0, 200) + '...';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.secContainer}>
        <View style={styles.graphicContainer}>
          {/* Normal PrimaryText (No See More) */}
          <PrimaryText text1={'Graphic Designer'} graphicDesignValue={true} />
          <SecondaryText text2={'By Syed Husnain'} instructor_Name={true} />
          <Image source={require('../assets/star.png')} style={styles.imageStyle} />
        </View>
        <View style={styles.dollarContainer}>
          <SecondaryText text2={'$72'} dollarVal={true} />
          <SecondaryText text2={'One time payment'} paymentVal={true} />
        </View>
      </View>

      {/* Expandable Text Container */}
      <View style={styles.textContainer}>
        <PrimaryText fullText={fullText} previewText={previewText} isExpandable={true} long_Text ={true} />
      </View>
      <View style = {styles.certificateContainer}>
        <LecturesInfo 
            bookImage = {require('../assets/Book.png')} lectureText ={'80+Lectures'} bookValue = {true}
            certificateImage ={(require('../assets/Certificate.png'))} certificateValue ={true} certificateText ={'Certificate'}
            clockImage = {require('../assets/Clock.png')} clockValue ={true} weekText = {'8 Weeks'}
            tagImage  ={require('../assets/Tag Window.png')} tagValue ={true} tagText = {'100% OFF'} 
        
        />

      </View>
      <View style = {styles.skillContainer}>
          <PrimaryText text1={'Skills'} welcome = {true} />
      </View>
      <View style = {styles.buttonContainer}>
            <ButtonType  title = {'Adobe'}  adobeButton = {true} />
             <ButtonType  title = {'Adobe Photo Shop'}  adobePhoto ={true} />
             <ButtonType  title = {'Logo'}  logoButton = {true}/>
      </View>
      <View style = {styles.buttonsecContainer}>
            <ButtonType  title = {'Designing'} adobeButton = {true} />
             <ButtonType  title = {'Poster Designing'} adobePhoto = {true} />
             <ButtonType  title = {'Figma'} logoButton = {true}/>
      </View>

    <View style = {styles.buttondividerContainer}>
      <View style ={styles.getEnrollStyle}>
            <ButtonType title={'Get Enroll'} fill_longButton={true} onPress = {() => ongetEnrollPressed() } />
      </View>
      <View style={styles.dividerContainer}>
              <Divider style={styles.dividerStyle} />
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    
  },
  secContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
  },
  graphicContainer: {
    width: '50%',
    height: 50,
  },
  dollarContainer: {
    width: '50%',
    height: 40,
    marginTop: 30,
    marginLeft: 2,
    alignItems: 'flex-end',
  },
  imageStyle: {
    marginLeft: 10,
    marginTop: 5,
  },
  textContainer: {
    width: '100%',
//height:100,
    marginLeft:2,
    
   // backgroundColor: 'green',
  },
  certificateContainer:{
     width:'100%',
     height:80,
     marginTop:5
     //backgroundColor:'gray',
  },
  skillContainer:{
    alignItems:'flex-start',
    marginLeft:2,
  },
  buttonContainer:{
    flexDirection:'row',
    width:'100%',
    height:45,
    justifyContent:'center',
    //backgroundColor:'gray',
  },
  buttonsecContainer:{
    flexDirection:'row',
    width:'100%',
    height:45,
    justifyContent:'center',
    marginTop:10,
  },
  buttondividerContainer:{
    width:'100%',
    height:90,
   // backgroundColor:'red',
   },
  getEnrollStyle:{
    alignItems:'center',
  },
  dividerContainer: {
    width: '40%',
    height: 4,
    alignSelf:'center',
    marginTop:14,
    borderRadius:20,
    
    //backgroundColor: 'purple',
  },
  dividerStyle:{
    //flex: 1,
    height: 4,
    backgroundColor: 'black',
  },
});

export default OverviewScreen;
