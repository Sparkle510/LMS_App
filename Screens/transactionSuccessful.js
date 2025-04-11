import { View, Text,StyleSheet,Image} from 'react-native';
import React from 'react';
import ProgressIndicator from '../Component/progressIndicator';
import PrimaryText from '../Component/primaryText';
import ButtonType from '../Component/buttonType';
import { Divider } from 'react-native-elements';



const TransactionSuccessful = props => {
    const onContinuePressed = () => {
         props.navigation.navigate('SignIn')
    }
  return (
       <View style ={styles.mainContainer}>
            <View style = {styles.progressContainer}>
            <ProgressIndicator    thirdCircle = {'blue'} firstlineColor = {'gray'}  secondlineColor = {'blue'} largeCircle ={true}/>
            </View>  
            <View style ={styles.transactionContainer}>
               <PrimaryText text1 = {'Transaction Successful'}  welcome ={true} />
            </View> 
            <View style = {styles.imageContainer}>
                 <Image source = {require('../assets/object.png')} style ={styles.imgStyle}/>

            </View>
            <View style  = {styles.buttondividerContainer}>
                <View style ={styles.getEnrollStyle}>
                        <ButtonType title={'Continue'} fill_longButton={true} onPress = {() => onContinuePressed() } />
                 </View>
                 <View style={styles.dividerContainer}>
                         <Divider style={styles.dividerStyle} />
                 </View> 

             </View>
        </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
    },
    progressContainer:{
        width:'90%',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        borderRadius:10,
        backgroundColor:'#E5EAF4',
        marginBottom:20,

    },
    transactionContainer:{
        width:'90%',
        height:50,
        alignItems:'center',
       // backgroundColor:'yellow',
    },
    imageContainer:{
        width:'90%',
        height:350,
        alignItems:'center',
        justifyContent:'center',
       // backgroundColor:'green',
    },
    imgStyle:{
        width:280,
        height:295,
        marginLeft:60,
    },
    buttondividerContainer:{
        width:'90%',
        height:149,
        justifyContent:'flex-end',
        alignItems:'center',
        //backgroundColor:'red',
    },
    getEnrollStyle:{
        alignItems:'center',
      },
      dividerContainer: {
        width: '40%',
        height: 4,
        alignSelf:'center',
        marginTop:15,
        borderRadius:20,
        
        //backgroundColor: 'purple',
      },
      dividerStyle:{
        //flex: 1,
        height: 4,
        backgroundColor: 'black',
      },
    

})
export default TransactionSuccessful;