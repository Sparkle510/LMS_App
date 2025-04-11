import { View, Text,StyleSheet,Image} from 'react-native';
import React from 'react';
import ProgressIndicator from '../Component/progressIndicator';
import PrimaryText from '../Component/primaryText';
import LecturesInfo from '../Component/lecturesInfo';
import { Divider } from 'react-native-elements';
import ButtonType from '../Component/buttonType';




const EnrollScreen = props => {
    const  onContinuePressed = () =>{
        props.navigation.navigate('PaymentMethod')
    }
  return (
    <View style = {styles.mainContainer}>
              <View style = {styles.progressContainer}>
                   <ProgressIndicator  firstCircle ={'blue'} firstlineColor = {'blue'} secondlineColor = {'gray'} largeCircle ={true} />
                </View> 
        <View style = {styles.overViewContainer}>
              <PrimaryText text1 = {'Overview'} welcome = {true}/> 
        </View>
        <View style = {styles.courseNameContainer}>
             <PrimaryText text1 = {'Course Name :'} />
             <PrimaryText text1 = {'Graphic Designing'} welcome = {true}/> 
        </View>
        <View style = {styles.certificateContainer}>
                <LecturesInfo 
                    bookImage = {require('../assets/Book.png')} lectureText ={'80+Lectures'} bookValue = {true}
                    certificateImage ={(require('../assets/Certificate.png'))} certificateValue = {true}
                    certificateText ={'Certificate'}
                    clockImage = {require('../assets/Clock.png')} clockValue ={true} weekText = {'8 Weeks'}
                    tagImage  ={require('../assets/Tag Window.png')} tagValue ={true} tagText = {'100% OFF'}
                    customStyle = {styles.certificateStyle}
                
                />
        </View>
        <View style = {styles.courseNameContainer}>
             <PrimaryText text1 = {'Course Rating :'} />
             <Image source = {require('../assets/star.png')} style = {styles.imageStyle} />
        </View>
        <View style = {styles.courseNameContainer}>
             <PrimaryText text1 = {'Course Time   :'} />
             <Text style = {styles.textStyle}>8 weeks</Text>
        </View>
        <View style = {styles.courseNameContainer}>
             <PrimaryText text1 = {'Course Trainer :'} />
             <Text style = {styles.nameStyle}>By Ali Abbas</Text>
        </View>

        <View style = {styles.certificateContainer}>

                <LecturesInfo 
                        lectureText ={'Date:    03/14/2025'} 
                        certificateText ={'Price: 72$'}
                        weekText = {'Coupon: 10% Off'}
                        tagText = {'Final Price: 65$'}
                        customStyle = {styles.purchaseDetailsStyle}
                        purchaseDetails = {true}
                
                />
        </View>
        <View style = {styles.buttondividerContainer}>
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
        //backgroundColor:'red',
        
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
    overViewContainer:{
        width:'100%',
        height:30,
        alignItems:'flex-start',
        marginLeft:35,
       // backgroundColor:'orange',
    
    },
    courseNameContainer:{
        width:'100%',
        heigth:30,
        marginLeft:50,
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:10,
    },
    certificateContainer:{
        width:'90%',
        height:80,
        marginTop:25, 
        marginBottom:25,
       // backgroundColor:'red',
       // backgroundColor: '#F5F5F5',
        position: 'relative',
        //backgroundColor:'gray',
     },

     
     imageStyle:{
        marginTop:9,
        marginLeft:30,
     },
     textStyle:{
        fontSize:16,
        marginLeft:30,
        fontFamily:'italic',
        fontWeight:'bold',
     },
     nameStyle:{
        fontSize:16,
        marginLeft:25,
        fontFamily:'italic',
        fontWeight:'bold',
     },
     buttondividerContainer:{
      width:'100%',
      height:90,
      //backgroundColor:'red',
     },
     getEnrollStyle:{
        alignItems:'center',
      },
      dividerContainer: {
        width: '40%',
        height: 4,
        alignSelf:'center',
        marginTop:14,
        borderRadius:20,
        
        //backgroundColor: 'purple',
      },
      dividerStyle:{
        //flex: 1,
        height: 4,
        backgroundColor: 'black',
      },
      purchaseDetailsStyle:{
        width:'95%',
        height:90,
        borderWidth: 1,
        borderRadius: 15,
        marginTop:20,
        position: 'relative',
        borderColor: 'gray',

        //backgroundColor:'purple',
      },
      certificateStyle:{
        width:'95%',
        height:90,
        borderRadius: 15,
      },
})
export default EnrollScreen;