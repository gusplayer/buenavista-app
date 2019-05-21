import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import {
  Colors,
  CuponesBlue,
  CuponesGold,
  CuponesOpera,
  CuponesPremium
} from "../utils/const";
import API from "../utils/api";
import Modal from "react-native-modal";

export default class CouponUsed extends React.Component {
  constructor() {
    super();
    this.state = {
      cuponList: [],
      loading: true,
      isVisible: false,
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

  onpressImage = description => {
    this.setState({
      textCupon: description,
      isVisible: true
    });
    this.modal(description);
  };

  modal = () => {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.modalContent}>
        <View
          style={{
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Text style={{ padding: 5, fontWeight: "900", fontSize: 18 }}>
            Detalle cupón
          </Text>
          <ScrollView
            style={{
              paddingTop: 5,
              paddingBottom: 10
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, marginBottom: 15 }}
            >
              {this.state.textCupon}
            </Text>
          </ScrollView>

          <Text
            style={styles.butonClose}
            onPress={() => {
              this.setState({ isVisible: false });
            }}
          >
            Cerrar
          </Text>
        </View>
      </View>
    );
  };

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
                <TouchableOpacity
                  style={styles.imagePress}
                  onPress={() => this.onpressImage(x.Descripcion)}
                >
                  <Image
                    style={styles.imageCupon}
                    source={CuponesBlue[x.id_Cupon]}
                  />
                </TouchableOpacity>
              )}
              {this.state.membership == "GOLD" && (
                <TouchableOpacity
                  style={styles.imagePress}
                  onPress={() => this.onpressImage(x.Descripcion)}
                >
                  <Image
                    style={styles.imageCupon}
                    source={CuponesGold[x.id_Cupon]}
                  />
                </TouchableOpacity>
              )}
              {this.state.membership == "OPERA" && (
                <TouchableOpacity
                  style={styles.imagePress}
                  onPress={() => this.onpressImage(x.Descripcion)}
                >
                  <Image
                    style={styles.imageCupon}
                    source={CuponesOpera[x.id_Cupon]}
                  />
                </TouchableOpacity>
              )}
              {this.state.membership == "PREMIUM" && (
                <TouchableOpacity
                  style={styles.imagePress}
                  onPress={() => this.onpressImage(x.Descripcion)}
                >
                  <Image
                    style={styles.imageCupon}
                    source={CuponesPremium[x.id_Cupon]}
                  />
                </TouchableOpacity>
              )}
            </View>
            {/* <Text style={styles.textCupon}>
              Valido por una noche totalmente gratis para dos personas en
              habitación doble a elegir entre varios hoteles y hosterías
              nacionales.
            </Text> */}
            <Text style={styles.textCupon}>Usados: {x.Ocupados}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.listComponents()}
        <Modal isVisible={this.state.isVisible}>{this.modal()}</Modal>
      </ScrollView>
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
    marginBottom: 20,
    textAlign: "center"
  },
  imageCupon: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  imagePress: {
    width: "100%",
    height: "100%"
  },
  modalContent: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 8,
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  modalIcon: {
    color: "gray",
    fontSize: 35,
    marginBottom: 10,
    marginTop: 10
  },
  butonClose: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    textAlign: "right"
  }
});
