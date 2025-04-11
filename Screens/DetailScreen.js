import { View, Text,StyleSheet,Button} from 'react-native'
import React ,{useCallback} from 'react'
import ImageIconText from '../Component/imageIconText'
import { useSelector, useDispatch } from "react-redux";
import { login,logout } from '../redux/slices/authSlice';
import { increment, decrement,incrementByAmount } from '../redux/slices/counterSlice'; // Import Redux actions
const DetailScreen = props => { // For DetailScreen to be used as a Component


  const count = useSelector((state) => state.Counter.count);
    const dispatch = useDispatch(); // Get dispatch function
    const handleIncreament = useCallback(() => dispatch(increment()),[dispatch]);
    const handleDecreament = useCallback(() => dispatch(decrement()),[dispatch]);

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const authDispatch = useDispatch();
  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.secContainer}>
        <View style = {styles.courseContainer}>
            <ImageIconText subjectImg = {(require('../assets/wire.png'))} course_Name ={'WireFraming Fundamentals'} 
                instructor_Name ={'By Shoaib Hassan'} showBlueBar ={true} />
        </View>
        <View style = {styles.courseContainer} >
             <ImageIconText subjectImg = {(require('../assets/graphic.png'))} course_Name ={'UI UX Designing'} 
                instructor_Name ={'By Ali Abbas'}showBlueBar ={true}/>
        </View>
        <View style = {styles.courseContainer}>
            <ImageIconText subjectImg = {(require('../assets/website.png'))} course_Name ={'Website Design'} 
                instructor_Name ={'By Ali Abbas'}showBlueBar ={true}/>
        </View>
        <View style = {styles.courseContainer}>
            <ImageIconText subjectImg = {(require('../assets/video.png'))} course_Name ={'Figma Basics'} 
                instructor_Name ={'By Shoaib Hassan'}showBlueBar ={true}/>
        </View>
                
      </View>
      <View style={{ width :'100%',height:70, justifyContent: "center", alignItems: "center", backgroundColor:'green', }}>
            <Text style={{ fontSize: 24 }}>Count: {count}</Text>
            <Button title="Increment" onPress={handleIncreament} />
            <Button title="Decrement" onPress={handleDecreament} />
            <Button title="Increment By Amount" onPress={() => dispatch(incrementByAmount(5))} />

          </View>
          <View style={styles.logInContainer}>
              <Text style={{ fontSize: 20 }}>
                  User is {isLoggedIn ? "Logged In" : "Logged Out"}
                </Text>
                <Button title="Login" onPress={() => authDispatch(login())} />
                <Button title="Logout" onPress={() => authDispatch(logout())} />
              </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer :{
       flex:1,
             // backgroundColor:'red',
    },
    secContainer:{
      width:'100%',
      marginTop:60,
      flexDirection:'column',
      alignItems:'center',
     // backgroundColor:'red',
      
      //marginTop:30,
    },
    courseContainer:{
            width: '90%',
            height:65,
            //backgroundColor:'green',
            backgroundColor:'#E5EAF4',
            borderRadius:10,
            borderWidth:2,
            borderColor:'#E5EAF4',
            borderCurve:10,
            marginTop:10,
    },
    logInContainer:{
      width:'100%', 
      height:90, 
      justifyContent: "center",
       alignItems: "center",
       backgroundColor:'gray'
 
   },

})
export default DetailScreen;