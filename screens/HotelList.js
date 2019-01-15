import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import HeaderTab from "../src/components/header";
import TabBar from "../src/components/tabBar";
import { Colors } from "../utils/const";
import { Container } from "native-base";

export default class HotelList extends React.Component {
  constructor() {
    super();
    this.state = {
      hotels: [
        {
          nombre: "Hotel del Llano",
          foto:
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          ciudad: "Villavicencio",
          descuento: "10",
          precio: "60.000",
          precioBuenavista: "45.000"
        },
        {
          nombre: "Hotel GHL",
          foto:
            "https://images.pexels.com/photos/6534/holiday-vacation-hotel-luxury.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          ciudad: "Bogota",
          descuento: "10",
          precio: "700.000",
          precioBuenavista: "550.000"
        },
        {
          nombre: "Hotel Cabañas del mar",
          foto:
            "https://images.pexels.com/photos/1287441/pexels-photo-1287441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          ciudad: "San Andres",
          descuento: "10",
          precio: "120.000",
          precioBuenavista: "115.000"
        }
      ]
    };
  }

  _getHotels() {
    const { navigate } = this.props.navigation;

    return (
      <FlatList
        style={styles.flatList}
        data={this.state.hotels}
        keyExtractor={(item, _) => item.nombre}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigate("HotelDetails", {
                hotel: item
              })
            }
          >
            <View style={styles.itemList}>
              <View style={styles.infoProduct}>
                <Image style={styles.imageHotel} source={{ uri: item.foto }} />

                <View style={styles.itemListText}>
                  <Text style={styles.nameHotel}>{item.nombre}</Text>
                  <Text style={styles.nameCity}>{item.ciudad} </Text>
                </View>
                <View style={styles.priceHotel}>
                  <Text style={styles.nitePriceText}>Precio por noche</Text>
                  <View style={styles.preciosContent}>
                    <Text style={styles.precioText}>$ {item.precio}</Text>
                    <Text style={styles.precioBuenavista}>
                      $ {item.precioBuenavista}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: false };
    const rigthHeader = { data: true, icon: "sliders", path: "Filter" };

    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <ScrollView style={styles.body}>{this._getHotels()}</ScrollView>
        <TabBar navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  body: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  flatList: {
    width: "100%",
    marginTop: 10
  },
  itemList: {
    width: "100%",
    flexDirection: "column",
    marginTop: 5,
    alignItems: "center"
  },
  infoProduct: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "90%",
    height: 300,
    elevation: 3,
    marginBottom: 15
  },
  itemListText: {
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    padding: 12,
    elevation: 2
  },
  imageHotel: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  nameHotel: {
    fontWeight: "600",
    color: "black",
    fontSize: 17
  },
  nameCity: {
    fontWeight: "300",
    color: "black",
    fontSize: 13
  },
  priceHotel: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 12,
    paddingVertical: 5,
    backgroundColor: Colors.red,
    borderRadius: 6,
    elevation: 2,
    marginTop: -2
  },
  nitePriceText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  },
  preciosContent: {
    alignItems: "flex-end"
  },
  precioText: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    textDecorationLine: "line-through"
  },
  precioBuenavista: {
    color: "white",
    fontSize: 22,
    fontWeight: "500"
  }
});
