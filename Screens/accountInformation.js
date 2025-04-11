import { View, Text ,StyleSheet} from 'react-native';
import ProgressIndicator from '../Component/progressIndicator';
import React, { useState } from 'react';
import PrimaryText from '../Component/primaryText';
import PlaceHolderType from '../Component/placeHolderType';
import ButtonType from '../Component/buttonType';
import { Divider } from 'react-native-elements';



const AccountInformation = props => {
  const onContinuePressed = () => {
       props.navigation.navigate('TransactionSuccessful')
  }
    const[userName,setUserName] = useState('')
    const[cardNumebr,setcardNumber] = useState('')
    const[cardExpiry,setcardExpiry] = useState('')
    const[cvcNumebr,setcvcNumber] = useState('')



  return (
    <View style = {styles.mainContainer}>
        <View style = {styles.progressContainer}>
             <ProgressIndicator   secondCircle ={'blue'} firstlineColor = {'blue'} secondlineColor = {'gray'} largeCircle ={true}/>
         </View> 
         <View style = {styles.paymentTextContainer}>
                    <PrimaryText text1={'Select Payment Method'} welcome = {true}/>
                    
                    </View>  
                <View style = {styles.optionContainer}>
                  <PlaceHolderType title={'Name on Card'} value={userName} onChangeText={setUserName} 
                  customStyle={styles.nameCardStyle}
                  />

                </View>  
                <View style = {styles.optionContainer}>
                     <PlaceHolderType title={'Card Number'} value={cardNumebr} onChangeText={setcardNumber  } 
                       customStyle={styles.nameCardStyle}
                       />     

                </View> 
            <View style = {[styles.optionContainer,{flexDirection:'row', backgroundColor:'none',}]}>
                <View style = {styles.cvcdateContainer}>
                     <PlaceHolderType title={'CVC Number'} value={cvcNumebr} onChangeText={setcvcNumber  } 
                       customStyle={styles.nameCardStyle}
                       />     
                </View> 
                <View style = {[styles.cvcdateContainer,{marginLeft:8,marginRight:0,}]}>
                     <PlaceHolderType title={'Expiry Date'} value={cardExpiry} onChangeText={setcardExpiry  } 
                       customStyle={styles.nameCardStyle}
                       />     

                </View> 
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
const styles  = StyleSheet.create({
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
    paymentTextContainer:{
        width:'90%',
        height:35,
       // justifyContent:'center',
        alignItems:'flex-start',
        marginTop:5,
       // borderRadius:10,
        //backgroundColor:'#E5EAF4',
        

    },
    
    optionContainer:{
        width:'90%',
        height:58,
        //alignContent:'space-between',
       // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius: 10,

       // borderRadius:10,
        backgroundColor:'#E5EAF4',
        //marginBottom:8,

    },
    nameCardStyle:{
        height: 58,
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:2,
        marginBottom:0,
        alignSelf:'center',
        //marginBottom: 10,
    
    //backgroundColor:'green',
  },
  cvcdateContainer:{
    width:'47%',
    height:58,
    marginRight:10,
    borderRadius:12,
    backgroundColor:'#E5EAF4',

  },
  buttondividerContainer:{
    width:'90%',
    height:300,
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

export default AccountInformation;