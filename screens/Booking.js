import React from "react";
import { StyleSheet, Platform, Text } from "react-native";

import BookingIOS from "./BookingIOS";
import BookingAndroid from "./BookingAndroid";

export default class Booking extends React.Component {
  render() {
    if (Platform.OS === "ios") {
      return <BookingIOS navigation={this.props.navigation}></BookingIOS>;
    } else {
      return (
        <BookingAndroid navigation={this.props.navigation}></BookingAndroid>
      );
    }
  }
}
