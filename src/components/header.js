import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Header, Left, Body, Right, View } from "native-base";
import Icon from "react-native-vector-icons/Feather";

const HeaderTab = ({ navigation, left, right }) => {
  return (
    <Header style={styles.header}>
      <Left>
        {left.data ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={left.icon} size={23} color="gray" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </Left>
      <Body>
        <Image
          source={require("../assets/Logo.png")}
          style={{ width: 200, height: 30 }}
        />
      </Body>
      <Right>
        {right.data ? (
          <TouchableOpacity onPress={() => navigation.navigate(right.path)}>
            <Icon name={right.icon} size={23} color="gray" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    elevation: 5
  }
});

export default HeaderTab;
