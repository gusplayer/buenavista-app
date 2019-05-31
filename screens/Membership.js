import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator
} from "react-native";
import { Colors, Membresias } from "../utils/const";
import { Container, Tab, Tabs, TabHeading } from "native-base";
import TabBar from "../src/components/tabBar";
import HeaderTab from "../src/components/header";
import Profile from "./Profile";
import Benefits from "./Benefits";
import CouponInfo from "./CouponInfo";
import API from "../utils/api";

export default class Membreship extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      membership:
        "https://res.cloudinary.com/komercialatam/image/upload/v1559332869/cupones/blue/83268.png"
    };
    this.dataInit();
  }

  async dataInit() {
    let membershipStorage = await API._retrieveDataMembership();
    this.setState({
      membership: membershipStorage,
      loading: false
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: false };
    const rigthHeader = { data: false };
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="gray"
            style={{ marginTop: 100 }}
          />
        </View>
      );
    }

    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />
        <ScrollView style={styles.body}>
          <View style={styles.contentImage}>
            {this.state.membership == "BLUE" && (
              <Image style={styles.imageTop} source={Membresias.BLUE} />
            )}
            {this.state.membership == "GOLD" && (
              <Image style={styles.imageTop} source={Membresias.GOLD} />
            )}
            {this.state.membership == "OPERA" && (
              <Image style={styles.imageTop} source={Membresias.OPERA} />
            )}
            {this.state.membership == "PREMIUM" && (
              <Image style={styles.imageTop} source={Membresias.PREMIUM} />
            )}
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
              <CouponInfo navigation={this.props.navigation} />
            </Tab>
          </Tabs>
        </ScrollView>
        <TabBar navigation={this.props.navigation} position={5} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageTop: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  contentImage: {
    height: 160,
    width: "100%"
  }
});
