import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import PlaceHolderType from '../Component/placeHolderType';
import ButtonType from '../Component/buttonType';
import ImgIconForChat from '../Component/imgIconForChat';


const ChatScreen = props => {
  return (
    <View style = {styles.mainContainer}>
      <PlaceHolderType 
          title ={'Search Here'}   searchImg = {true} customStyle = {styles.search_InputText_Container} />

        <View style = {styles.chatCallContainer}>
           <ButtonType title = {'Chat'} fillButton = {true}/>
           <ButtonType title = {'Call'}  />
        </View>

      <View style = {styles.UserchatScroll}>
        <ScrollView style = {styles.chatScroll}>
        <View style = {styles.user_chatContainer}>
            <ImgIconForChat userImg ={require('../assets/ateeq.png')} user_Name ={'Ateeq'}/>

        </View>
        <View style = {styles.user_chatContainer}>
            <ImgIconForChat userImg ={require('../assets/abc.png')} user_Name ={'Ateeq'}/>

        </View>
        <View style = {styles.user_chatContainer}>
            <ImgIconForChat userImg ={require('../assets/xyz.png')} user_Name ={'Ateeq'}/>

        </View>
        <View style = {styles.user_chatContainer}>
            <ImgIconForChat userImg ={require('../assets/abc.png')} user_Name ={'Ateeq'}/>

        </View>
        <View style = {styles.user_chatContainer}>
            <ImgIconForChat userImg ={require('../assets/abc.png')} user_Name ={'Ateeq'}/>

        </View>
        </ScrollView>
     </View>   
    </View>
  )
}
const styles = StyleSheet.create({
   mainContainer:{
    flex:1,
    //backgroundColor:'red',
    alignItems:'center',

   },
   search_InputText_Container: {
    width:'90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 22,
    marginTop:25,

    //marginBottom: 10,
    //marginLeft:8,
    // backgroundColor:'green',
  },
  chatCallContainer:{
    width:'90%',
    height:70,
    flexDirection:'row',
    justifyContent:'center',
    //backgroundColor:'orange',
  },
  UserchatScroll:{
    width:'100%',
    height:'60%',
    marginTop:10,
    marginLeft:30,
   
    //backgroundColor:'gray',

  },
  user_chatContainer:{
    width:'90%',
    height:70,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
    //backgroundColor:'green',
  },
  chatScroll:{
     flexGrow:1,
  },
})
export default ChatScreen;