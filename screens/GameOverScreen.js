import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Color from "../constants/color"

export default props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
  <Text>Number of Rounds: {props.roundsNumber}</Text>
  <Text>Number was: {props.userNumber}</Text>
  <Button style={Color.primary} title="NEW GAME" onPress={props.onRestart}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
