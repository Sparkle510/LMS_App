import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositionExample = () => {
  return (
    <View style={styles.container}>
      
      {/* Relative Position Example */}
      <Text style={styles.label}>Relative Position</Text>
      
      {/* Object placed in the ghost position */}
      <View style={styles.ghostBox}>
        <Text style={styles.ghostText}>🍎 Apple (Ghost Space)</Text>
      </View>

      {/* Relative Box (Moved Down) */}
      <View style={styles.relativeBox}>
        <Text style={styles.text}>📦 Moved Box (Relative)</Text>
      </View>

      {/* Absolute Position Example */}
      <Text style={styles.label}>Absolute Position</Text>

      {/* Object placed in ghost space of absolute */}
      <View style={styles.ghostBox}>
        <Text style={styles.ghostText}>🐶 Dog (Ghost Space)</Text>
      </View>

      {/* Absolute Box (Moves but removes space) */}
      <View style={styles.absoluteBox}>
        <Text style={styles.text}>🚀 Floating Box (Absolute)</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ghostBox: {
    width: 140,
    height: 100,
    backgroundColor: 'lightgray', // Original Position Marker
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -100, // Ensures the next element appears in the right place
  },
  ghostText: {
    fontSize: 14,
    color: 'black',
  },
  relativeBox: {
    width: 140,
    height: 100,
    backgroundColor: 'blue',
    position: 'relative',
    top: 20, // Moves down but keeps original space
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteBox: {
    width: 140,
    height: 100,
    backgroundColor: 'green',
    position: 'absolute',
    top: 250, // Moves freely and removes space
    left: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PositionExample;
