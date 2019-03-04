import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Colors } from "../utils/const";
import Image from "react-native-remote-svg";
import { Container, Tab, Tabs, TabHeading } from "native-base";
import TabBar from "../src/components/tabBar";
import HeaderTab from "../src/components/header";
import Profile from "./Profile";
import Benefits from "./Benefits";
import CouponInfo from "./CouponInfo";

export default class Membreship extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: false };
    const rigthHeader = { data: false };

    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <ScrollView style={styles.body}>
          <View style={styles.infoHotel}>
            <Image
              style={styles.imageTop}
              source={require("../src/assets/tarjeta_clientes.png")}
            />
          </View>
          <Tabs tabBarUnderlineStyle={{ backgroundColor: Colors.red }}>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Perfil</Text>
                </TabHeading>
              }
            >
              <Profile navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Beneficios</Text>
                </TabHeading>
              }
            >
              <Benefits />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Cupones</Text>
                </TabHeading>
              }
            >
              <CouponInfo />
            </Tab>
          </Tabs>
        </ScrollView>
        <TabBar navigation={this.props.navigation} position={5} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  imageTop: {
    width: "100%"
  }
});
