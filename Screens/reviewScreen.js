import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import React from 'react'
import ImageIconText from '../Component/imageIconText'


const ReviewScreen = props => {
  return (
    <View style = {styles.mainContainer}>
      <ScrollView style = {styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}

      >
      <View style = {styles.commentBox}>
        <View style = {styles.reviewContainer}>

          <View style = {styles.userContainer}>
            <ImageIconText subjectImg = {(require('../assets/xyz.png'))} reviewer_Name ={'Muhammad Waqas'} 
                instructor_Name ={'Student'} showReview ={true}/>
            </View>
            <View style = {styles.starContainer}>
                <Image source ={require('../assets/star.png')}/>
            </View>
        </View>
        <View style = {styles.commentContainer}>
        <Text>A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. </Text>

        </View>
    </View>
  <View style = {styles.commentBox}>

      <View style = {styles.reviewContainer}>
         <View style = {styles.userContainer}>
            <ImageIconText subjectImg = {(require('../assets/abc.png'))} reviewer_Name ={'Muhammad Qasim'} 
                instructor_Name ={'Student'} showReview ={true}/>
          </View>
          <View style = {styles.starContainer}>
              <Image source ={require('../assets/star.png')}/>
          </View>
      </View>
      <View style = {styles.commentContainer}>
             <Text>A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. </Text>

      </View>
    </View>
  <View style = {styles.commentBox}>
      <View style = {styles.reviewContainer}>
      <View style = {styles.userContainer}>
            <ImageIconText subjectImg = {(require('../assets/xyz.png'))} reviewer_Name ={'Muhammad Waqas'} 
                instructor_Name ={'Student'} showReview ={true}/>
            </View>
            <View style = {styles.starContainer}>
                <Image source ={require('../assets/star.png')}/>
            </View>
      </View>
      <View style = {styles.commentContainer}>
          <Text>A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. </Text>

      </View>
    </View>

      </ScrollView>
      
    </View>
  )
}
const styles =StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
  },
  scrollContainer:{
    width:'100%',
    
  },
  commentBox:{
    width:'90%',
    height:150,
    borderRadius:10,
    backgroundColor:'#E5EAF4',
     marginTop:2,

  },
  reviewContainer:{
    width:'90%',
    height:60,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'flex-start',
   

  },
  commentContainer:{
    width:'90%',
    height:80,
    borderRadius:10,
    //backgroundColor:'#E5EAF4',
  },
  contentContainer: {
    alignItems: 'center',  // Keep child views centered
   // paddingBottom: 20,  // Extra spacing at the bottom
  },
  userContainer:{
    width:'70%',
    height:70,

    //backgroundColor:'orange',
  },
  starContainer:{
    width:'30%',
    height:20,
    alignItems:'flex-end',
    marginTop:25,
    //backgroundColor:'gray',
  },
})
export default ReviewScreen;