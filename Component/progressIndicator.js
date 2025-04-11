import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

const ProgressIndicator = props => {
  return (
    <View style={styles.container}>
      {props.largeCircle && (
        <Svg height="60" width="100%">
          {/* Line between Step 1 and Step 2 */}
          <Line x1="15%" y1="25" x2="50%" y2="25" stroke={props.firstlineColor} strokeWidth="2" />

          {/* Line between Step 2 and Step 3 */}
          <Line x1="55%" y1="25" x2="85%" y2="25" stroke={props.secondlineColor} strokeWidth="2" />

          {/* Step 1 - Overview */}
          <Circle cx="10%" cy="25" r="20" stroke="gray" strokeWidth="2" fill={props.firstCircle} />
          <Text style={[styles.stepText, { left: "8%" }]}>1</Text>
          <Text style={[styles.largeLabelText, { left: "3%" }]}>Overview</Text>

          {/* Step 2 - Payment Method */}
          <Circle cx="50%" cy="25" r="20" stroke="gray" strokeWidth="2" fill={props.secondCircle} />
          <Text style={[styles.stepText, { left: "49%" }]}>2</Text>
          <Text style={[styles.largeLabelText, { left: "35%" }]}>Payment Method</Text>

          {/* Step 3 - Confirmation */}
          <Circle cx="90%" cy="25" r="20" stroke="gray" strokeWidth="2" fill={props.thirdCircle} />
          <Text style={[styles.stepText, { left: "88%" }]}>3</Text>
          <Text style={[styles.largeLabelText, { left: "79%" }]}>Confirmation</Text>
        </Svg>
      )}

      {props.smallCircle && (
        <View style={styles.stepContainer}>
          <Svg height={40} width={30}>
            <Circle cx="50%" cy="20" r="9" stroke="gray" strokeWidth="2" fill={props.circleColor} />
            <Text style={styles.plusText}>+</Text>
          </Svg>
          <Text style={styles.smallLabelText}>{props.optionName}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  stepContainer: {
    flexDirection: "row", // Aligns small circle and text in a row
    alignItems: "center", // Centers items vertically
  },
  stepText: {
    position: "absolute",
    top: 13,
    color: "white",
    fontWeight: "bold",
  },
  largeLabelText: {
    position: "absolute",
    top: 45,
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
  },
  smallLabelText: {
    marginLeft: 8, // Space between small circle and text
    fontSize: 18,
    fontFamily: "sans-serif-light",
    // fontWeight: "bold",
    color: "black",
  },
  plusText: {
    position: "absolute",
    left: "35%",
    //top: "10%",
   transform: [{ translateY: 8 }],
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

export default ProgressIndicator;
