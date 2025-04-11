import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import SecondaryText from './secondaryText';
import PrimaryText from './primaryText';


const SettingOption = props => {
  return (
    <View>
           

        {props.profileImage &&(
          <Image source={require('../assets/abc.png')} style={styles.topimageStyle} />
        )}
        
        
       
            <View style = {styles.optionContainer}>
              <TouchableOpacity style = {styles.touchableStyle} onPress={props.onPress} >
               <Image source ={props.optionImage} style ={styles.optionImgStyle}/>
               <SecondaryText  text2 = {props.optionName} settingOption = {true}/>
               
                        <PrimaryText text1 = {'>'} settingCustomStyle = {props.firstOption}/>
                </TouchableOpacity>     
              
        </View>
       


        
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        ///width:'90%',
        //height:50,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        backgroundColor:'gray',
    },
    
    topimageStyle:{
         width:70,
         height:70,
         bottom:70,
         alignSelf:'center',
         position:'absolute',
         
         zIndex:1,

    },
    touchableStyle: {
      flexDirection: 'row',  // Ensures elements stay in a row
      alignItems: 'center',  // Aligns items properly
      padding: 10,           // Adds some space
      borderRadius: 8,       // Optional, for smooth touch effect
    },
    optionContainer:{
        width: 300,
        height:50,
        flexDirection:'row',
       // backgroundColor:'red',
        // backgroundColor:'#E5EAF4',
         //borderRadius:10,
         borderWidth:2,
         borderColor:'#E5EAF4',
        // borderCurve:10,
         alignItems:'center',
         //marginTop:10,
      },
      optionImgStyle:{
        //marginLeft:10,
   
     },
     arrowContainer:{
       width:'94%',
       
       justifyContent:'flex-end',
     },
})

export default SettingOption;