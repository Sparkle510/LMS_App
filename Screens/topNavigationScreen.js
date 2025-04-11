import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import TopNavigation from '../Component/topNavigation';



const TopNavigationScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.videoContainer}>
        <Image source={require('../assets/Rectangle.png')} style={styles.videoStyle} />
        
        {/* Centered Play Button */}
        <View style={styles.playContainer}>
          <Image source={require('../assets/Play.png')} style={styles.playButtonStyle} />
        </View>

      </View>
      <TopNavigation/>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  videoContainer: {
    width: '100%',
    height: 145,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoStyle: {
    width: '100%',
    height: '100%',
   // resizeMode: 'cover', // Adjust this based on your needs
  },
  playContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonStyle: {
    width: 80,  // Adjust size as needed
    height: 80,
  },
});

export default TopNavigationScreen;
