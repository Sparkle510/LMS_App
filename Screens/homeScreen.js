import { View, Text, StyleSheet,Image,FlatList,TouchableOpacity,Platform ,alert } from 'react-native'
import React from 'react'
import { useState, useEffect, useRef,useContext } from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import axios from  'axios';
import * as Location from 'expo-location';
import * as Device from 'expo-device';
import PrimaryText from '../Component/primaryText'
import PlaceHolderType from '../Component/placeHolderType'
import ButtonType from '../Component/buttonType'
import ImgCard from '../Component/ImgCard'
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { FIREBASE_AUTH ,FIREBASE_APP} from '../firebase';



async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error('Project ID not found');
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log('token is ',token);
      Alert.alert('Token', `Token is : ${token}`)
      //Alert.alert('Token', `Token is: ${token}`);

    } catch (e) {
      token = `${e}`;
    }

  } else {
    alert('Must use physical device for Push Notifications');
  }
  
  return token;
}
const  HomeScreen = props =>  {
  const [expoPushToken, setExpoPushToken] = useState('');
    const [channels, setChannels] = useState([]);
    const [notification, setNotification] = useState(undefined);
    const notificationListener = useRef();
    const responseListener = useRef();
    const [weather, setweather] = useState(null)
    const [profileData, setProfileData] = useState(null);
    // const [mapRegion, setMapRegion] = useState('')
    const [errorMsg, setErrorMsg] = useState(null);
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
  const onIconPressed = () => {
            props.navigation.navigate('NotificationPage')
  }
  const onsettingPressed = () => {
    props.navigation.navigate('SettingPage')
}
useEffect(() => {
  profilePressed();
  loadWeatherData()

  console.log('Before requesting token');

  registerForPushNotificationsAsync().then(token => {
    console.log('Token received:', token);
    if (token) setExpoPushToken(token);
  });

  console.log('After requesting token');

  if (Platform.OS === 'android') {
    Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
  }
  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    setNotification(notification);
  });

  responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    console.log(response);
  });

  return () => {
    notificationListener.current &&
      Notifications.removeNotificationSubscription(notificationListener.current);
    responseListener.current &&
      Notifications.removeNotificationSubscription(responseListener.current);
  };
  
  
}, []);
const myLocation = async () => {
    console.log('myLocation is called')
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log('error msg',errorMsg)

        return;
    }

    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    
    
    // console.log('Latitude:', location.coords.latitude, 'Longitude:', location.coords.longitude);
    return  location;
    
};


const loadWeatherData = async () => {
  try {
      let regionCoordinates = await myLocation();
      console.log('Latitude in regionCoordinates:', regionCoordinates.coords.latitude, 'Longitude:', regionCoordinates.coords.longitude);

      let mylatitude = regionCoordinates.coords.latitude;
      let mylongitude = regionCoordinates.coords.longitude;

      let temperature = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${mylatitude}&lon=${mylongitude}&appid=c654f28149701ba22f6f3e9e6eaeac5a&units=metric`);
      setweather(temperature.data);
      // console.log(temperature.data);

  } catch (error) {
      console.error('Error fetching weather data:', error);
  }
}
  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.welcomeContainer}>
        <View style = {styles.NameandWelcomeContainer}>
            {/*weather?<Text style={styles.weatherValue}>{`Temperature: ${weather.main.temp}`}</Text>:null*/}
          <PrimaryText text1 = {'Welcome,'} welcome = {true}/>
          {
             <View>
               <Text style = {styles.profileNameStyle}>{profileData ? profileData.firstName:'Loading..'}</Text>
               </View> } 
               </View>        
          <View style = {styles.bellsettingImgContainer}>
                <TouchableOpacity   onPress = {() => onsettingPressed()} style = {styles.iconStyle} >
                    <Image source = {require('../assets/Gear.png')}/>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => onIconPressed()}>
                     <Image source = {require('../assets/Doorbell.png')} style = {styles.iconStyle}/>
                  </TouchableOpacity>

          </View>
      </View>
      <View style = {styles.searchContainer}>
          <PlaceHolderType 
          title ={'Search Here'}   searchImg = {true} customStyle = {styles.search_InputText_Container} />
      </View>
      <View style = {styles.threeButtons}>
             <ButtonType  title = {'UI/UX'} button_for_UI = {true} />
             <ButtonType  title = {'Graphic Design'} button_for_Graphic = {true} />
             <ButtonType  title = {'Figma'} button_for_Figma = {true}/>
      </View>
      <View style = {styles.continuTextStyle}>
            <PrimaryText text1 = {'Continue Watching'} welcome = {true}/>
            <View style = {styles.seeAllContainer}>
                  <PrimaryText text1 = {'Sea All'} sea_All = {true} />  
            </View>
      </View>
      <View style = {styles.flatListContainer}>

      <FlatList
            numColumns={2}
             data = {[
              {Course:'Java Script',userName:'By Syed Ahmed', banner: require('../assets/graphic.png')},
              // {Course:'WireFraming',userName:'', banner: require('../asset/wire.png')},
              {Course:'Video Editing',userName:'By Hadir Ali', banner: require('../assets/video.png')},
              {Course:'WordPress',userName:'By Syed Ahmed', banner: require('../assets/website.png')},
              {Course:'Type Script',userName:'By Adil Ahmed', banner: require('../assets/wire.png')},
            

          ]}
      
           renderItem={({item}) =>{
           return(
            <ImgCard Course={item.Course} banner ={item.banner} userName={item.userName}
                onPress={() => props.navigation.navigate('topNavigationScreen', { course: item.Course })}
            
            />
            
           )}}
      
           >
      </FlatList> 

      </View>
  </View>
  )
}
const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
       
    },
    welcomeContainer:{
      flexDirection:'row',
      width:'100%',
      height:40,
      alignItems:'center',
      marginLeft:8,
      //backgroundColor:'green',
    },
    NameandWelcomeContainer:{
      width:'50%',
      flexDirection:'row',
      //backgroundColor:'orange',
    },
    bellsettingImgContainer:{
        flexDirection: 'row',  // Keeps icons in a row
        alignItems: 'center',  // Ensures vertical alignment
        justifyContent: 'flex-end', // Distributes icons evenly
        width: '46%', // Prevents shifting due to container width change
       // paddingVertical: 10, // Adds space to prevent movement on refresh
       // backgroundColor:'gray',


    },
    profileNameStyle:{
      fontSize:16,
      color:'blue',
      fontWeight:'bold',
      fontFamily:'italic',
    },
    searchContainer:{
      flexDirection:'row',
      width:'93%',
      height:60,
      marginLeft:12,
      marginTop:5,
      marginBottom:3,
      //borderRadius:20,
      //borderCurve:'circular',
      alignItems:'center',
      justifyContent:'center',
     // backgroundColor:'orange',

    },
    search_InputText_Container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 22,
      paddingHorizontal:'',
      height: 50,
      width:'100%',
      alignSelf:'center',

      //marginBottom: 10,
      //marginLeft:8,
      // backgroundColor:'green',
    },

    iconStyle: {
      width: 30,  // Set a fixed width for both icons
      height: 30, // Set a fixed height for both icons
      resizeMode: 'contain', // Ensures the image does not stretch
    },
    
    threeButtons:{
      flexDirection:'row',
      width:'100%',
      height:70,
      ///backgroundColor:'gray',

    },
    continuTextStyle:{
      flexDirection:'row',
      width:'100%',
      height:35,
      marginLeft:5,
      //backgroundColor:'orange',
    },
    seeAllContainer:{
            flexDirection:'row',
            width:'53%',
           justifyContent:'flex-end',
           //backgroundColor:'red',
    },
    flatListContainer:{
      width:'100%',
      height:350,
       //flex:1,
       //backgroundColor:'red',
    },
    weatherValue:{
      fontWeight:'bold',
      textAlign:'right',
      marginRight:20,
    },
    
});
export default HomeScreen;