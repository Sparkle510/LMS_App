import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';

import PrimaryText from '../Component/primaryText'
import SecondaryText from '../Component/secondaryText'
import ButtonType from '../Component/buttonType'

const PasswordSuccessful = props => {
    const  successButtonPress = () =>{
        props.navigation.navigate('SignIn')
}
  return (
    <View style ={styles.primaryContainer} >
        <View style ={styles.secondaryContainer}>
            <Image source ={require('../assets/successIcon.png')} style ={styles.imageStyle} />
            <PrimaryText text1 ={'your Password has been updated'} passwordUpdated = {true}/>
               <View style = {styles.successWord}>
                   <PrimaryText text1 ={'Successfully!'} passwordUpdated = {true}/>
               </View>
                <View style = {styles.transactionStyle}>
                  <PrimaryText text1 ={'Transaction Successfully!'} passwordUpdated = {true}/>
                  <SecondaryText text2 ={'Updated password securly'} succesPasswordSecText = {true} />
                </View>
                <ButtonType title={'Done'} fill_longButton={true} onPress = {() => successButtonPress()} />


        </View>

        <View style={styles.dividerContainer}>
              <Divider style={styles.dividerStyle} />
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
       // backgroundColor: 'red',
        justifyContent: 'center', // Centers vertically
        //alignItems: 'center', // Centers horizontally
    },
    secondaryContainer: {
        width: '100%', // Adjust width as needed
        height: '70%',
        marginTop:100,
       // backgroundColor: 'green',
        alignItems: 'center',
       // justifyContent: 'center', // (Optional) Centers content inside
    },
    imageStyle:{
        width:180,
        height:180,
        marginBottom:50,
    },
    successWord:{
        alignItems:'center',
    },
    transactionStyle:{
        width:'93%',
        height:'10%',
        alignItems:'center',
        borderRadius:10,
        marginTop:100,
        marginBottom:10,
        backgroundColor:'#C6C6C6',
    },
    dividerContainer: {
        width: '50%',
        height: 4,
        alignSelf:'center',
        marginTop:100,
        //justifyContent:'flex-end',
        //backgroundColor: 'purple',
      },
      dividerStyle:{
        //flex: 1,
        height: 3,
        backgroundColor: 'black',
      },
});

export default PasswordSuccessful;