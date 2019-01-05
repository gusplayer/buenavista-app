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
import Header from "../src/components/header";
import TabBar from "../src/components/tabBar";
import Icon from "react-native-vector-icons/Feather";

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
          precio: "60.000",
          precioBuenavista: "45.000"
        }
      ]
    };
  }

  _getProducts() {
    const { navigate } = this.props.navigation;
    // if (this.state.loading) {
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator size="large" color="#f14b5a" />
    //     </View>
    //   );
    // }
    return (
      <FlatList
        style={styles.flatList}
        data={this.state.hotels}
        keyExtractor={(item, _) => item.nombre}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigate("DetailsProducts", {
                product: item
              })
            }
          >
            <View style={styles.itemList}>
              <View style={styles.infoProduct}>
                <Image
                  style={styles.imageHotel}
                  resizeMode="contain"
                  source={{ uri: item.foto }}
                />

                <View style={styles.itemListText}>
                  <Text style={styles.nameHotel}>{item.nombre}</Text>
                  <Text>{item.ciudad} </Text>
                </View>
              </View>
              <View style={styles.separator} />
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.body}>
          <Header />
          {this._getProducts()}
        </ScrollView>
        <TabBar />
      </View>
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
    backgroundColor: "white",
    backgroundColor: "#F5F5F5"
  },
  flatList: {
    width: "100%",
    marginTop: 10
  },
  itemList: {
    width: "90%",
    flexDirection: "column",
    marginHorizontal: 10,
    marginTop: 10
  },
  infoProduct: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 10,
    width: "100%"
  },
  itemListText: {
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    padding: 12
  },
  nameHotel: {
    fontWeight: "600",
    color: "black",
    fontSize: 17
  },
  imageHotel: {
    flex: 3,
    width: "100%",
    height: 100,
    borderRadius: 4
  },
  priceProduct: {
    fontWeight: "100",
    color: "#2c3e50",
    fontSize: 20
  },
  buttonProduct: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonDetails: {
    fontWeight: "bold",
    color: "#008c9d"
  },
  buttonEdit: {
    fontWeight: "bold",
    color: "#0f9380"
  },
  icon: {
    color: "white",
    fontSize: 18,
    marginLeft: 6
  },
  iconView: {
    color: "#34495e",
    fontSize: 16
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  separator: {
    backgroundColor: "#ecf0f1",
    height: 1,
    width: "100%",
    marginVertical: 10
  }
});
