import React from "react";
import { StyleSheet, Text, View, ScrollView, WebView } from "react-native";
import HeaderTab from "../src/components/header";
import Image from "react-native-remote-svg";
import { Container } from "native-base";
import TabBar from "../src/components/tabBar";

export default class Notification extends React.Component {
  constructor() {
    super();
  }

  render() {
    const leftHeader = { data: false };
    const rigthHeader = { data: false };
    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />
        <View style={styles.body}>
          <Image
            source={require("../src/assets/iconos/login/mail-24px.svg")}
            style={styles.imageIcon}
          />

          <Text style={styles.text}>
            Hola muy pronto recibirás notificaciones de promociones, reservas y
            mucho más.
          </Text>
        </View>
        <TabBar navigation={this.props.navigation} position={4} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    width: 300,
    textAlign: "center",
    color: "black",
    marginTop: 20
  },
  imageIcon: {
    width: 90,
    height: 90
  }
});
