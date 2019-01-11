import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Image from "react-native-remote-svg";
import { Container, Header, Left, Body, Right, View } from "native-base";
import Icon from "react-native-vector-icons/Feather";

const HeaderTab = ({ navigation, left, right }) => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          {left.data ? (
            <TouchableOpacity onPress={() => navigation.navigate(left.path)}>
              <Icon name={left.icon} size={23} color="gray" />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </Left>
        <Body>
          <Image
            source={require("../assets/Logo.svg")}
            style={{ width: 200, height: 70 }}
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
        {/* <Right>
          <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
            <Icon name="align-center" size={23} color="gray" />
          </TouchableOpacity>
        </Right> */}
      </Header>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60
  },
  header: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center"
  }
});

export default HeaderTab;
