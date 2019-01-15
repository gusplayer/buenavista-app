import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderTab from "../src/components/header";
import { Colors } from "../utils/const";
import Image from "react-native-remote-svg";

export default class HotelDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: true, icon: "arrow-left", path: "HotelList" };
    const rigthHeader = { data: false };
    const item = this.props.navigation.state.params.hotel;
    return (
      <View style={styles.container}>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <ScrollView style={styles.body}>
          <View style={styles.infoHotel}>
            <Image style={styles.imageHotel} source={{ uri: item.foto }} />
          </View>
          <View style={styles.redSeparator}>
            <Text style={styles.nameHotel}>{item.nombre}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descripción</Text>
            <Text style={styles.descriptionText}>
              Lograr satisfacción total de nuestro cliente brindando en su
              estadia el placer de disfrutar la comodidad, calidez y diversión
              que nuestro hotel ofrece, con los mas altos estandares de calidad
              internacional y manteniendo el equilibrio responsable entre la
              sociedad y el medio ambiente.
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceContainerLeft}>
              <Text style={styles.descriptionTitle}>Precio por noche</Text>
            </View>
            <View style={styles.priceContainerRight}>
              <Text style={styles.precioText}>$ {item.precio}</Text>
              <Text style={styles.precioBuenavista}>
                $ {item.precioBuenavista}
              </Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Cupones</Text>
            <View style={styles.couponContainer}>
              <Image
                source={require("../src/assets/iconoscupones/blue/MI.svg")}
                style={styles.imageCoupon}
              />
              <Image
                source={require("../src/assets/iconoscupones/blue/CM.svg")}
                style={styles.imageCoupon}
              />

              <Image
                source={require("../src/assets/iconoscupones/blue/2x1.svg")}
                style={styles.imageCoupon}
              />
            </View>
          </View>
          <View style={styles.webSiteLink}>
            <Text style={styles.textLink}>Ver sitio web del hotel</Text>
          </View>
          <View style={styles.bookingButton}>
            <Text
              onPress={() => navigate("Booking")}
              style={styles.bookingText}
            >
              RESERVAR
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start"
  },
  body: {
    flex: 1,
    backgroundColor: "white"
  },
  infoHotel: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 200,
    marginTop: -5
  },
  imageHotel: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  redSeparator: {
    width: "100%",
    height: 35,
    backgroundColor: Colors.red,
    justifyContent: "center",
    alignItems: "center"
  },
  nameHotel: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },
  descriptionContainer: {
    padding: 20
  },
  descriptionTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: "black",
    fontWeight: "600"
  },
  descriptionText: {
    color: "black",
    textAlign: "justify"
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    backgroundColor: Colors.red
  },
  priceContainerLeft: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
    width: "55%",
    height: "100%"
  },
  priceContainerRight: {
    padding: 4,
    paddingHorizontal: 25,
    backgroundColor: Colors.red,
    alignItems: "flex-end",
    width: "45%",
    height: "100%"
  },
  precioText: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
    textDecorationLine: "line-through"
  },
  precioBuenavista: {
    color: "white",
    fontSize: 18,
    fontWeight: "500"
  },
  webSiteLink: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textLink: {
    color: "gray",
    fontSize: 16,
    fontWeight: "600"
  },
  bookingButton: {
    width: "100%",
    height: 45,
    backgroundColor: Colors.red,
    justifyContent: "center",
    alignItems: "center"
  },
  bookingText: {
    color: "white",
    fontWeight: "300",
    fontSize: 18
  },
  couponContainer: {
    flexDirection: "row"
  },
  imageCoupon: {
    marginTop: 2,
    marginLeft: 0,
    marginRight: 10,
    width: 55,
    height: 55
  }
});
