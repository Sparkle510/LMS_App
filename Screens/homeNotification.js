import { View, StyleSheet } from 'react-native';
import React from 'react';
import ImageIconText from '../Component/imageIconText';

const HomeNotification = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secContainer}>
        <View style={styles.courseContainer}>
          <ImageIconText
            subjectImg={require('../assets/Ok.png')}
            transacrionStatus={'Transaction Successful!'}
            instructor_Name={'By Ali Abbas'}
            timeValue = {'5 mins ago'}
            courseNameStyle={styles.courseText}  // Pass custom style
            instructorNameStyle={styles.instructorText}  // Pass custom style
            notificationPageValue ={true}
            
          />
        </View>
        <View style={styles.courseContainer}>
          <ImageIconText
            subjectImg={require('../assets/ThumbsUp.png')}
            transacrionStatus={'Transaction Successful!'}
            instructor_Name={'By Ali Abbas'}
            timeValue = {'5 mins ago'}
            courseNameStyle={styles.courseText}  // Pass custom style
            instructorNameStyle={styles.instructorText}  // Pass custom style
            notificationPageValue ={true}
            
          />
        </View>
        <View style={styles.courseContainer}>
          <ImageIconText
            subjectImg={require('../assets/Ok.png')}
            transacrionStatus={'Transaction Successful!'}
            instructor_Name={'By Ali Abbas'}
            timeValue = {'5 mins ago'}
            courseNameStyle={styles.courseText}  // Pass custom style
            instructorNameStyle={styles.instructorText}  // Pass custom style
            notificationPageValue ={true}
            
          />
        </View>
        <View style={styles.courseContainer}>
          <ImageIconText
            subjectImg={require('../assets/Ok.png')}
            transacrionStatus={'Transaction Successful!'}
            instructor_Name={'By Ali Abbas'}
            timeValue = {'5 mins ago'}
            courseNameStyle={styles.courseText}  // Pass custom style
            instructorNameStyle={styles.instructorText}  // Pass custom style
            notificationPageValue ={true}
            
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor: 'green',
  },
  secContainer: {
    width: '100%',
    height: '30%',
    marginTop: 60,
    flexDirection: 'column',
    alignItems: 'center',
   // backgroundColor: 'gray',
  },
  courseContainer: {
    width: '95%',
    height: 65,
    backgroundColor: '#E5EAF4',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E5EAF4',
    marginTop: 10,
    alignItems: 'center',
  },
  courseText: {
    fontSize:18,
    fontWeight: 'bold',
    marginTop:15,
    textAlign:'left',
    //color: 'blue',
  },
  instructorText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginLeft:3,
    //textAlign:'left',

    color: 'black',
  },
});

export default HomeNotification;
