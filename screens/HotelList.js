import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import HeaderTab from "../src/components/header";
import TabBar from "../src/components/tabBar";
import { Colors } from "../utils/const";
import { Container } from "native-base";
import API from "../utils/api";
import FastImage from "react-native-fast-image";

export default class HotelList extends React.Component {
  async componentDidMount() {
    const hotelAPI = await API.getHotelList();
    this.setState({
      hotelList: hotelAPI,
      loading: false
    });

    //si trae props de filters
    const { navigate } = this.props.navigation;
    if (this.props.navigation.state.params.ciudad) {
      const id_ciudad_props = this.props.navigation.state.params.ciudad;
      let newHotelList = this.state.hotelList.filter(value => {
        return value.id_Ciudad == id_ciudad_props;
      });
      this.setState({
        hotelList: newHotelList
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      hotelList: [],
      loading: true
    };
  }

  _getHotels() {
    const { navigate } = this.props.navigation;

    return (
      <FlatList
        style={styles.flatList}
        windowSize={10}
        removeClippedSubviews={true}
        data={this.state.hotelList}
        keyExtractor={(item, _) => item.imagen1}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={{ backgroundColor: "white" }}
            onPress={() =>
              navigate("HotelDetails", {
                hotel: item
              })
            }
          >
            <View style={styles.itemList}>
              {item.imagen1 != "" && (
                <View style={styles.infoProduct}>
                  <FastImage
                    style={styles.imageHotel}
                    source={{ uri: item.imagen1 }}
                    // resizeMode={FastImage.resizeMode.contain}
                  />

                  <View style={styles.itemListText}>
                    <Text style={styles.nameHotel}>{item.Hotel}</Text>
                    <Text style={styles.nameCity}>
                      {item.Ciudad}, {item.Pais}
                    </Text>
                  </View>

                  <View style={styles.priceHotel}>
                    {/* <Text style={styles.nitePriceText}>Precio por noche</Text>
                    <View style={styles.preciosContent}>
                      <Text style={styles.precioText}>
                        USD {item.Precio_Hotel}
                      </Text>
                      <Text style={styles.precioBuenavista}>
                        USD {item.Precio_Buenavista}
                      </Text>
                    </View> */}
                  </View>
                </View>
              )}
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }

  async tokenView() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    return (
      <View>
        <Text>Hola</Text>
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: false };
    const propsFilterCity = this.props.navigation.state.params;
    const rigthHeader = { data: true, icon: "sliders", path: "Filter" };
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#f14b5a" />
          {propsFilterCity ? (
            <Text>Filtrando Hoteles</Text>
          ) : (
            <Text>Cargando hoteles</Text>
          )}
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
        {/* <View>{this.tokenView()}</View> */}
        <View style={styles.body}>{this._getHotels()}</View>
        <TabBar navigation={this.props.navigation} position={1} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    //    resizeMode: 'cover',
    marginBottom: -14
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
