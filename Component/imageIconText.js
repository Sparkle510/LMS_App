import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import PrimaryText from './primaryText';
import SecondaryText from './secondaryText';


const ImageIconText = (props) => {
  return (
    <View style={styles.primaryContainer}>
      <View style={styles.secondaryContainer}>
        <Image source={props.subjectImg} style={styles.imgStyle} />
        <View style={styles.textbarContainer}>
        
          
          {props.notificationPageValue &&( //For notification page on the home Screen bell icon
            <View>
                  <PrimaryText text1={props.transacrionStatus}  customStyle={props.courseNameStyle} />
                  <View style  = {styles.timeTextContainer}>
                        <PrimaryText text1={props.instructor_Name}  customStyle={props.instructorNameStyle} />
                        <SecondaryText text2 = {props.timeValue} timeValue = {true}/>
                  </View>
                  
            </View>
          )}
          

          {props.showBlueBar && (
            <View>
                  <PrimaryText text1={props.course_Name} courseName={true} />
                  <PrimaryText text1={props.instructor_Name} instructor_Name={true} />

                  
              <View style={styles.percentageContainer}>
                <Image source={require('../assets/percentage.png')} style={styles.percentageImgStyle} />
              </View>
              <Image source={require('../assets/blueBar.png')} style={styles.barImgStyle} />
            </View>
          )}
          {props.showReview && (
            <View>
                  <PrimaryText text1={props.reviewer_Name} reviewer_Name={true} />
                  <PrimaryText text1={props.instructor_Name} instructor_Name={true} />

                  
             
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryContainer: {
    flexDirection: 'row',
    width: '95%',
    height: 100,
    borderRadius: 20,
   // backgroundColor:'gray',
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 55,
  },
  textbarContainer: {
    width: '90%',
    height: 80,
    marginTop: 5,
    marginLeft: 2,
    //backgroundColor:'gray',
  },
  barImgStyle: {
    width: '95%',
    height: 5,
    marginLeft: 2,
  },
  percentageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 1,
  },
  percentageImgStyle: {
    width: 50,
    height: 10,
    textAlign: 'right',
  },
  timeTextContainer:{
    flexDirection:'row',
    
  },
  starContainer: {
    flexDirection: 'row',
    width:'50%',
    justifyContent: 'flex-end',
    
   // marginRight: 20,
    marginBottom: 30,
    backgroundColor:'red',
  },
  starImgStyle:{
    marginBottom:250,
  },
});

export default ImageIconText;
