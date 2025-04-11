import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import React, { useCallback } from 'react'
import PrimaryText from './primaryText'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ImgCard = props => {
   const dispatch = useDispatch();
   const cartItems = useCallback(() => dispatch(addToCart({
    courseName: props.Course,
    userName: props.userName,
    banner: props.banner
  })));

  const addtoCartPressed = () => {
    cartItems();
  };
  return (
    <View style = {styles.mainContainer}>
        <View style = {styles.imageContainer}>
                <Image source = {props.banner}  style = {styles.imgStyle}/>
        </View>
        <View style = {styles.blew_ImageText}>
         <TouchableOpacity onPress={props.onPress}>
            <PrimaryText text1 = {props.Course} welcome={true}/>
         </TouchableOpacity>
                 <View style = {styles.starContainer}>
                     <Image source ={require('../assets/star.png')}/> 
                 </View>
               
            
        </View>
        <View style = {styles.instructorName}>
             <PrimaryText text1 = {props.userName} instructor_Name = {true} />
         </View>
         <Image source ={require('../assets/bar.png')} style = {styles.barImgstyle}/> 
            {/* Add to Cart button */}
            <TouchableOpacity  style={styles.addToCartButton} onPress = {() => addtoCartPressed()}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
                
             </TouchableOpacity>

  
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer :{
        flex :1,
        //backgroundColor:'red',
    },
    imageContainer:{
        width:'100%',
        //backgroundColor:'green',
    },
    imgStyle:{
        width:160,
        height:150,
        marginTop:20,
        marginLeft:5,
       // marginRight:20,
    },
    blew_ImageText:{
        flexDirection:'row',
        width:'100%',
        
       // backgroundColor:'orange',
        alignItems:'center',

    },
    starContainer:{
        width:'32%',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        //backgroundColor:'purple',
    },
    instructorName:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'gray',
    },
    barImgstyle:{
        marginLeft:5,
    },
    addToCartButton: {
        width:'90%',
        height:40,
        backgroundColor: 'green',
        justifyContent:'center',
        borderRadius: 5,
        marginTop: 10,
        marginLeft:5,
        //justifyContent:'space-between',
      },
      addToCartText: {
        color: 'white',
        fontSize: 14,
        textAlign:'center',
      },
})
export default ImgCard;