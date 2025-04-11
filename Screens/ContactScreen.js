import { View, Text, StyleSheet, Image } from 'react-native';
import { useState,React,useEffect } from 'react';
import PrimaryText from '../Component/primaryText';
import ButtonType from '../Component/buttonType';
import InformationBox from '../Component/infoBox';
import { FIREBASE_APP,FIREBASE_AUTH } from '../firebase';
import { getDoc,doc, getFirestore } from 'firebase/firestore';


const ContactScreen = props => {
  const [profileData,setProfileData] = useState('');
  const auth = FIREBASE_AUTH;
  const db = getFirestore(FIREBASE_APP);

   const profilePressed = async () => {
          try {
            let profile = await getDoc(doc(db, 'UserData', auth.currentUser.email));
            if (profile.exists()) {
              console.log(profile.data());
              setProfileData(profile.data());
            }
          } catch (error) {
            console.log(error.message);
          }
        };
      useEffect (() => {
        profilePressed();


      },[]); 
  return (
    <View style = {styles.mainContainer}>
       <InformationBox  
              
          nameHere={profileData ? `${profileData.firstName} ${profileData.lastName}` : 'Loading...'}  
           tag = {'Tag Line'}  introText ={'A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. Another important category of definitions is the class of ostensive definitions, which convey the meaning of a term by pointing out examples'}
            contactScreenValue = {true} aboutIntroValue = {true} profileImage = {true} />
     

         </View>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor: 'green',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
});

export default ContactScreen;
