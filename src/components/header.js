import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Image from "react-native-remote-svg";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.svg")}
        style={{ width: 200, height: 70 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 65
  }
});

export default Header;
