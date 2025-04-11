import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './Screens/landingPage';
import SignInPage from './Screens/SignInPage';
import SignUpPage from './Screens/SignUpPage';
import ForgetPassword from './Screens/forgetPassword';
import PasswordSuccessful from './Screens/passwordSuccessful';
import HomeScreen from './Screens/homeScreen';
import ImgCard from './Component/ImgCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';         
import ChatScreen from './Screens/ChatScreen';
import ContactScreen from './Screens/ContactScreen';
import DetailScreen from './Screens/DetailScreen';
import SettingScreen from './Screens/settingScreen';
import PositionExample from './Screens/alignExample';
import ImageIconText from './Component/imageIconText';
import FlexboxDemo from './Screens/alignExample';
import ImgIconForChat from './Component/imgIconForChat';
import HomeNotification from './Screens/homeNotification';
import SettingOption from './Component/settingOption';
import TopNavigationScreen from './Screens/topNavigationScreen';
import LecturesInfo from './Component/lecturesInfo';
import EnrollScreen from './Screens/enrollScreen';
import PaymentMethod from './Screens/paymentMethod';
import AccountInformation from './Screens/accountInformation';
import TransactionSuccessful from './Screens/transactionSuccessful';
//import CurrentUser from './Screens/currentUser';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store,persistor} from './redux/store';
import CartScreen from './Screens/currentUser';
import { useSelector } from 'react-redux';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <Provider store={store}>  
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
          
      <Stack.Navigator>
        
              <Stack.Screen name="LandingPage" component={LandingPage} /> 
              <Stack.Screen name="Home" component={MyTabs} />
              <Stack.Screen name="HomeTabs" component={HomeScreen} />  
              <Stack.Screen name="SignIn" component={SignInPage} />  
              <Stack.Screen name="SignUp" component={SignUpPage} />
              <Stack.Screen name="forgetPasswordPage" component={ForgetPassword} />
              <Stack.Screen name="passwordSuccessPage" component={PasswordSuccessful} />
              <Stack.Screen name="NotificationPage" component={HomeNotification} />  
              <Stack.Screen name="SettingPage" component={SettingScreen} />  
              <Stack.Screen name="topNavigationScreen" component={TopNavigationScreen} />  
              <Stack.Screen name="EnrollPage" component={EnrollScreen} />
              <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
              <Stack.Screen name="CardInformation" component={AccountInformation} />
              <Stack.Screen name="TransactionSuccessful" component={TransactionSuccessful} />

          </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    
    )}

    function MyTabs() {
      const cartItems = useSelector(state => state.cart.items);
      const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
      return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Details') {
              iconName = focused
              ? 'help-circle'
              : 'help-circle-outline';
            }
            else if (route.name === 'Cart') {
              iconName = focused 
              ? 'cart' 
              : 'cart-outline';
            }
            
            else if (route.name === 'Chat') {
              iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
            }
            else if (route.name === 'Contact') {
              iconName = focused
              ? 'person'
              : 'person-outline';
            }
            // Cart icon with badge
          if (route.name === 'Cart') {
            return (
              <View style={{ width: 30, height: 30 }}>
                <Ionicons name={iconName} size={size} color={color} />
                {cartCount > 0 && (
                  <View style={styles.cartCountStyle}>
                    <Text style={styles.cartCountText }>
                      {cartCount}
                    </Text>
                  </View>
                )}
              </View>
            );
          }
    
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
        
        >
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="Details" component={DetailScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />  
        </Tab.Navigator>
      );
    }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCountStyle:{
    
      position: 'absolute',
      right: -6,
      top: -3,
      backgroundColor: 'red',
      borderRadius: 10,
      width: 18,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',

  },
  cartCountText:{
    color: 'white',
    fontSize: 10, 
    fontWeight: 'bold' 

  },
});
