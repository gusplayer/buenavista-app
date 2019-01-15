import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../utils/const";

export default class CouponAvalible extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bookingButton}>
          <Text style={styles.bookingText}>1 METROPOLI NACIONAL</Text>
        </View>
        <View style={styles.itemList}>
          <View style={styles.containImage}>
            <Image
              style={styles.imageCupon}
              source={require("../src/assets/cupones/cuponesN/premium/cupon1.png")}
            />
          </View>
          <Text style={styles.textCupon}>
            Valido por una noche totalmente gratis para dos personas en
            habitación doble a elegir entre varios hoteles y hosterías
            nacionales.
          </Text>
        </View>
        <View style={styles.bookingButton}>
          <Text style={styles.bookingText}>1 METROPOLI NACIONAL</Text>
        </View>
        <View style={styles.itemList}>
          <View style={styles.containImage}>
            <Image
              style={styles.imageCupon}
              source={require("../src/assets/cupones/cuponesN/premium/cupon2.png")}
            />
          </View>
          <Text style={styles.textCupon}>
            Valido por una noche totalmente gratis para dos personas en
            habitación doble a elegir entre varios hoteles y hosterías
            nacionales.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  bookingButton: {
    width: "100%",
    height: 35,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center"
  },
  bookingText: {
    color: "white",
    fontWeight: "300",
    fontSize: 14
  },

  itemList: {
    width: "80%"
  },
  containImage: {
    height: 180
  },
  textCupon: {
    color: "black",
    marginBottom: 20
  },
  imageCupon: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
