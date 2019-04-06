import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Colors, CuponesOpera } from "../utils/const";
import API from "../utils/api";
import { AsyncStorage } from "react-native";

export default class CouponAvalible extends React.Component {
  constructor() {
    super();
    this.state = {
      cuponList: [],
      loading: true,
      membership: require("../src/assets/membresias/PREMIUM.png")
    };
  }

  async componentDidMount() {
    const cuponAPI = await API.getCuponAvalible();
    this.setState({
      cuponList: cuponAPI,
      loading: false
    });
    // let membership = await AsyncStorage.getItem("userMembership");
    let membershipStorage = "0PERA";
    this.setState({
      membership: "OPERA"
    });
  }

  listComponents() {
    return this.state.cuponList.map(x => {
      return (
        <View style={styles.container}>
          <View style={styles.bookingButton}>
            <Text style={styles.bookingText}>{x.Cupon}</Text>
          </View>
          <View style={styles.itemList}>
            <View style={styles.containImage}>
              {this.state.membership === "OPERA" && (
                <Image
                  style={styles.imageCupon}
                  source={CuponesOpera[x.id_Cupon]}
                />
              )}
            </View>
            {/* <Text style={styles.textCupon}>
              Valido por una noche totalmente gratis para dos personas en
              habitación doble a elegir entre varios hoteles y hosterías
              nacionales.
            </Text> */}
            <Text style={styles.textCupon}>Disponibles: {x.Disponibles}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return <ScrollView>{this.listComponents()}</ScrollView>;
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
    marginBottom: 20,
    textAlign: "center"
  },
  imageCupon: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
