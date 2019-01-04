import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Filter extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>Terminos y condiciones</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#dcf4fb"
  }
});
