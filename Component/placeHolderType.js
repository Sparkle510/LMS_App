import { View, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed expo vector icons

const PlaceHolderType = props => {
  const [isSecure, setIsSecure] = useState(props.secure);

  return (
    <View style={[styles.container,props.customStyle] }>

      {props.searchImg && (
             <Image source = {require('../assets/Search.png')} style = {styles.searchImgStyle}/>
           )}
      <TextInput
        placeholder={props.title}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={isSecure}
        style={styles.input}
      />
      {props.secure && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.iconContainer}>
          <Ionicons name={isSecure ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      )}
      
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal:'',
    height: 49,
    width:'92%',
    alignSelf:'center',
    marginBottom: 10,
    //marginLeft:8,
    // backgroundColor:'green',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily:'italic',
   // alignSelf:'center',
    justifyContent:'center',
  },
  iconContainer: {
    padding: 10,
  },
  searchImgStyle:{  
    width:30,
    height:30,
    
  },
});

export default PlaceHolderType;
