import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderTab from "../src/components/header";

export default class HotelDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: true, icon: "arrow-left", path: "HotelList" };
    const rigthHeader = { data: false };

    return (
      <View style={styles.container}>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <Text>Terminos y condiciones</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});
