import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  AsyncStorage
} from "react-native";
import {
  Colors,
  CuponesBlue,
  CuponesGold,
  CuponesOpera,
  CuponesPremium
} from "../utils/const";
import API from "../utils/api";

export default class CouponUsed extends React.Component {
  constructor() {
    super();
    this.state = {
      cuponList: [],
      loading: true,
      membership: require("../src/assets/cupones/cupones/BLUE/83270.png")
    };
  }

  async componentDidMount() {
    const cuponAPI = await API.getCuponUsed();
    this.setState({
      cuponList: cuponAPI,
      loading: false
    });
    let membershipStorage = await API._retrieveDataMembership();
    this.setState({
      membership: membershipStorage
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
              {this.state.membership == "BLUE" && (
                <Image
                  style={styles.imageCupon}
                  source={CuponesBlue[x.id_Cupon]}
                />
              )}
              {this.state.membership == "GOLD" && (
                <Image
                  style={styles.imageCupon}
                  source={CuponesGold[x.id_Cupon]}
                />
              )}
              {this.state.membership == "OPERA" && (
                <Image
                  style={styles.imageCupon}
                  source={CuponesOpera[x.id_Cupon]}
                />
              )}
              {this.state.membership == "PREMIUM" && (
                <Image
                  style={styles.imageCupon}
                  source={CuponesPremium[x.id_Cupon]}
                />
              )}
            </View>
            {/* <Text style={styles.textCupon}>
              Valido por una noche totalmente gratis para dos personas en
              habitación doble a elegir entre varios hoteles y hosterías
              nacionales.
            </Text> */}
            <Text style={styles.textCupon}>Disponibles: {x.Ocupados}</Text>
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
