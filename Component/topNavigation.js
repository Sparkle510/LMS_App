import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LessonScreen from '../Screens/lessonsScreen';
import ReviewScreen from '../Screens/reviewScreen';
import OverviewScreen from '../Screens/overViewScreen';





const Tab  = createMaterialTopTabNavigator();
const TopNavigation = props => {
  return (
    <View style = {styles.mainContainer}>
        <Tab.Navigator>


            <Tab.Screen name = 'Overview' component = {OverviewScreen}/>
            <Tab.Screen name="Lessons" component={LessonScreen} />
            <Tab.Screen name = "Review" component = {ReviewScreen}/>

        </Tab.Navigator>
        
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
})
export default TopNavigation;