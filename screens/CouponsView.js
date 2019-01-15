import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Colors } from "../utils/const";
import Image from "react-native-remote-svg";
import { Container, Tab, Tabs, TabHeading } from "native-base";
import TabBar from "../src/components/tabBar";
import HeaderTab from "../src/components/header";
import CouponAvalible from "./CouponInfo";
import CouponUsed from "./CouponUsed";

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
          <Tabs tabBarUnderlineStyle={{ backgroundColor: Colors.red }}>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Disponibles</Text>
                </TabHeading>
              }
            >
              <CouponAvalible navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Usados</Text>
                </TabHeading>
              }
            >
              <CouponUsed />
            </Tab>
          </Tabs>
        </ScrollView>
        <TabBar navigation={this.props.navigation} />
      </Container>
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
  },
  imageTop: {
    width: "100%"
  }
});
