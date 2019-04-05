import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Colors } from "../utils/const";
import { Container, Tab, Tabs, TabHeading } from "native-base";
import TabBar from "../src/components/tabBar";
import HeaderTab from "../src/components/header";
import Profile from "./Profile";
import Benefits from "./Benefits";
import CouponInfo from "./CouponInfo";
import { AsyncStorage } from "react-native";

export default class Membreship extends React.Component {
  constructor() {
    super();
    this.state = {
      membership: ""
    };
  }

  async componentDidMount() {
    try {
      //let membership = await AsyncStorage.getItem("userMembership");
      // this.state.membership = membership;
      this.state.membership = "OPERA";
    } catch (error) {
      console.warn(error);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: false };
    const rigthHeader = { data: false };
    const imageMembership = `../src/assets/membresias/${
      this.state.membership
    }.png`;

    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <ScrollView style={styles.body}>
          <View style={styles.contentImage}>
            <Image style={styles.imageTop} source={{ uri: imageMembership }} />
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
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  contentImage: {
    height: 160
  }
});
