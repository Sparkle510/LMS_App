import { View,StyleSheet,Image } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

import PrimaryText from './primaryText';


const ImgIconForChat = props => {
  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.secContainer}>
           <Image source={props.userImg} style = {styles.imgStyle}/>
           <View style = {styles.user_NameContainer}>
                <PrimaryText text1 ={props.user_Name} courseName ={true}/>
                <PrimaryText text1 ={'Hi,How are you?Everything is Ok'}  user_Name ={true}/>
           </View>
           <View style = {styles.chat_timeContainer}>
                 <Image source={require('../assets/numTwo.png')} />
                <PrimaryText text1 ={'01:06 PM'}  user_Name ={true}/>
           </View>
           
      </View>
      <View style={styles.lastDivider}>
          <Divider style={styles.dividerStyle} />
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
     mainContainer :{
        flex:1,
       // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',

     },
     secContainer:{
        width:'90%',
        height:90,
        flexDirection:'row',
        alignItems:'center',
        //backgroundColor:'red',
     },
     imgStyle:{
      width:50,
      height:55,
     // marginRight:20,
  },
  user_NameContainer:{
     width:'50%',
     height:60,
     marginLeft:5,
     alignItems:'center',
     //backgroundColor:'orange',
  },
  chat_timeContainer:{
    width:'30%',
    height:60,
    flexDirection:'column',
    alignItems:'flex-end',
    marignLeft:5,
    marginTop:30,
    //backgroundColor:'gray',

  },
  lastDivider: {
    width:'90%',
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
})
export default ImgIconForChat;