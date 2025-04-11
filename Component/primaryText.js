import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const PrimaryText = ({ text1, fullText, previewText, isExpandable, customStyle, ...props }) => {
  const [seeMore, setSeeMore] = useState(false);

  let textStyle = [styles.defaultText];

  if (customStyle) {
    textStyle = [styles.defaultText, customStyle]; 
  } 
  if (props.settingCustomStyle) { // For setting page option Text
    textStyle = [styles.defaultText, props.settingCustomStyle]; 
  } 
  else if (props.passwordUpdated){
    textStyle = [styles.defaultText, styles.passwordTextStyle];
  } 
  else if (props.signUpTextin_signIn) {
    textStyle = [styles.defaultText, styles.signUpTextStyle];
  } 
  else if (props.welcome) {
    textStyle = [styles.defaultText, styles.welcomeStyle];
  } 
  else if (props.welcomeName) {
    textStyle = [styles.defaultText, styles.welcomeNameStyle];
  }
   else if (props.see_All) {
    textStyle = [styles.defaultText, styles.seeAllStyle];
  } 
  else if (props.instructor_Name) {
    textStyle = [styles.defaultText, styles.userNameStyle];
  } 
  else if (props.courseName) {
    textStyle = [styles.defaultText, styles.courseNameTextStyle];
  } 
  else if (props.tagLine) {
    textStyle = [styles.defaultText, styles.taglineStyle];
  } 

  else if (props.name_Here) {
    textStyle = [styles.defaultText, styles.nameHereStyle];
  } 
  else if (props.aboutMe) {
    textStyle = [styles.defaultText, styles.aboutMeStyle];
  }
  else if (props.graphicDesignValue) {
    textStyle = [styles.defaultText, styles.graphicDesignStyle];
  } 
  else if (props.long_Text) { //For long Text in contact screen and OverviewScreen
    textStyle = [styles.defaultText, styles.long_TextStyle];
  } 
  else if (props.lessonDesign) { //For Lesson Screen  
    textStyle = [styles.defaultText, styles.lessonStyle];
  } 
  else if (props.reviewer_Name) { //For Lesson Screen  
    textStyle = [styles.defaultText, styles.reviewer_NameStyle];
  } 
  else if (props.lectureInfo) { //For Lesson Screen  
    textStyle = [styles.defaultText, styles.lectureInfoStyle];
  } 

  // If the text is NOT expandable, return plain text
  if (!isExpandable) {
    return <Text style={textStyle}>{text1}</Text>;
  }

  // Expandable text functionality
  return (
    <TouchableOpacity onPress={() => setSeeMore(!seeMore)}>
      <Text style={textStyle}>
        {seeMore ? fullText : previewText}
        <Text style={styles.seeMoreText}>{" "} {/* Space keeps it inline */}
          {seeMore ? 'See Less' : 'See More'}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },

  flexibleText: {
    flexShrink: 1, // Prevents "See More" from being pushed to a new line
  },
  signUpTextStyle: {
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 5,
  },
  passwordTextStyle: {
    fontSize: 17,
    fontStyle: 'italic',
  },
  welcomeStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    marginLeft: 5,
  },
  welcomeNameStyle: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  seeAllStyle: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  userNameStyle: {
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 5,
    textAlign: 'left',
  },
  courseNameTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 2,
    textAlign: 'left',
  },
  taglineStyle: {
    fontSize: 8,
    marginRight: 20,
  },
  nameHereStyle: { 
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    
  },
  aboutMeStyle: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  graphicDesignStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  seeMoreText: {
     color: 'blue',
     fontWeight: 'bold',
    
  },
  
  seeMoreText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16, // Keep same size as defaultText to avoid misalignment
    //textAlignVertical: 'center', // Ensures vertical alignment
  },

  
  long_TextStyle:{
    fontSize:12,
    fontFamily:'italic',
    marginLeft:2,
    textAlign: 'left',

  },
  lessonStyle:{
    fontSize:12,
  },
  reviewer_NameStyle:{
    fontSize:12,
    fontWeight:'bold',
    marginTop:25,
    marginRight:50,
  },
  lectureInfoStyle:{
    fontSize:12,
    fontFamily:'italic',
  },

});

export default PrimaryText;
