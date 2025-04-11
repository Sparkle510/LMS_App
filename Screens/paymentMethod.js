import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import ProgressIndicator from '../Component/progressIndicator';
import PrimaryText from '../Component/primaryText';
import { Divider } from 'react-native-elements';
import ButtonType from '../Component/buttonType';

const PaymentMethod = props => {
    const onContinuePressed = () => {
        props.navigation.navigate('CardInformation')
    }
  return (
    <View style = {styles.mainContainer}>
                <View style = {styles.progressContainer}>
                   <ProgressIndicator   secondCircle ={'blue'} firstlineColor = {'blue'} secondlineColor = {'gray'} largeCircle ={true}/>
                </View> 
                <View style = {styles.paymentTextContainer}>
                    <PrimaryText text1={'Select Payment Method'} welcome = {true}/>
                    
                    </View>  
                <View style = {styles.optionContainer}>
                    <ProgressIndicator  smallCircle = {true} optionName = {'Easy Paisa'} />

                </View>  
                <View style = {styles.optionContainer}>
                   <ProgressIndicator  smallCircle = {true} circleColor = {'blue'} optionName = {'Add Credit Card'}  />
                </View>  
                <View style = {styles.optionContainer}>
                   <ProgressIndicator  smallCircle = {true}  optionName = {'Jazz Cash'} />
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
        flex: 1,
        //backgroundColor:'green',
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
        height:55,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:6,
       // borderRadius:10,
        backgroundColor:'#E5EAF4',
        marginBottom:8,

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
export default PaymentMethod