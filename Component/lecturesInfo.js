import { View, Text ,StyleSheet,Image} from 'react-native';
import React from 'react';
import PrimaryText from './primaryText';

const LecturesInfo = props => {
  return (
    <View style = {styles.mainContainer} >
        <View style ={[styles.secContainer ,props.customStyle]}>
            {props.purchaseDetails && (
                 <Text style={styles.purchaseDetails}>Purchase Details</Text>

            )}

           <View style ={styles.durationContainer}>
               <View style ={styles.certificateContainer}>
                  {props.bookValue &&(
                     <Image source={props.bookImage} />

                    )}
                     <PrimaryText text1 ={props.lectureText} lectureInfo ={true}/>
                </View>
                  <View style={styles.certificateContainer}>
                     {props.certificateValue && (
                           <Image source={props.certificateImage } />
                        )}
                           <PrimaryText text1 ={props.certificateText} lectureInfo ={true}/>
                  </View>
            </View>
            <View style ={styles.durationContainer}>
                <View style ={styles.clockContainer}>
                    {props.clockValue &&(
                         <Image source={props.clockImage } style = {styles.clockImagestyle} />
                     )}
                     <PrimaryText text1 ={props.weekText} lectureInfo ={true}/>
                </View>
                <View style={styles.discountContainer}>
                    {props.tagValue&& (
                           <Image source={props.tagImage} />
                        )}
                           <PrimaryText text1 ={props.tagText} lectureInfo ={true}/>
                  </View>

            </View>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'green',
    },
    secContainer:{
        width:'90%',
        height:85,
        borderRadius:25,
       // backgroundColor:'green',
        backgroundColor:'#E5EAF4',
    },
    durationContainer:{
        width:'100%',
        height:40,
        flexDirection:'row',
        //backgroundColor:'red',
    },
    duration2Container:{
        width:'100%',
        height:60,
        //backgroundColor:'green',
    },
    certificateContainer:{
        flexDirection:'row',
        width:'50%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'orange',
    },
    clockContainer:{
        flexDirection:'row',
        width:'43%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginLight:20,
      // backgroundColor:'red',
        
    },
    discountContainer:{
        flexDirection:'row',
        width:'46%',
        height:40,
        justifyContent:'flex-end',
        alignItems:'center',
        marginLight:30,
      // backgroundColor:'orange',
        
    },
    clockImagestyle:{
        width:30,
        height:30,

    },
    purchaseDetails: {
        position: 'absolute',
        top: -15,
        left: 15,
        backgroundColor: '#F5F5F5', // Match background color to hide line
       // paddingHorizontal: 5,
        fontWeight: 'bold',
    },
})

export default LecturesInfo;
