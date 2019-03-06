import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors, Bold } from "../utils/const";
import API from "../utils/api";
import ImagePicker from "react-native-image-picker";

const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: false,
    path: "images"
  }
};

export default class Benefits extends React.Component {
  constructor() {
    super();
    this.state = {
      profileData: "",
      loading: false,
      imageSource:
        "http://www.classicindiascale.com/wp-content/uploads/2018/06/header-profile-default.png"
    };
  }

  async componentDidMount() {
    const profileAPI = await API.getProfile();
    this.setState({
      profileData: profileAPI[0],
      loading: false
    });
  }

  _galery() {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.warn("User cancelled image picker");
      } else if (response.error) {
        console.warn("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.warn("User tapped custom button: ", response.customButton);
      } else {
        let base64img = "data:image/jpeg;base64," + response.data;
        this.setState({
          imageSource: base64img
        });
      }
    });
  }
  _camera() {
    ImagePicker.launchCamera(options, response => {
      let base64img = "data:image/jpeg;base64," + response.data;
      this.setState({
        imageSource: base64img
      });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this._galery()}>
          <Image
            style={styles.photoUser}
            source={{
              uri: this.state.imageSource
            }}
          />
        </TouchableHighlight>
        <Text style={styles.nameUser}>{this.state.profileData.clNombre}</Text>
        <View style={styles.itemList}>
          <View style={styles.itemInfo}>
            <Icon
              name="sidebar"
              size={20}
              color="gray"
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>
              <Bold>C.I / D-N.I</Bold> {this.state.profileData.clCedula}
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Icon name="user" size={20} color="gray" style={styles.itemIcon} />
            <Text style={styles.itemText}>
              <Bold>Socio No. </Bold> {this.state.profileData.faCodigo}
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Icon name="disc" size={20} color="gray" style={styles.itemIcon} />
            <Text style={styles.itemText}>
              <Bold>Fecha Caducidad </Bold>
              {this.state.profileData.Column1}
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Icon name="mail" size={20} color="gray" style={styles.itemIcon} />
            <Text style={styles.itemText}>
              <Bold>Correo</Bold> Byron_0613@hotmail.com
            </Text>
          </View>
        </View>
        <TouchableHighlight
          style={styles.webSiteLink}
          onPress={() => navigate("Terms")}
        >
          <Text style={styles.textLink}>Ver terminos y condiciones</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.bookingButton}
          onPress={() => navigate("Login")}
        >
          <Text style={styles.bookingText}>Cerrar Sesión</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 25
  },
  photoUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  nameUser: {
    width: 180,
    fontWeight: "600",
    fontSize: 17,
    textAlign: "center",
    color: Colors.red
  },
  itemList: {
    marginVertical: 20,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  itemInfo: {
    flexDirection: "row",
    marginBottom: 7
  },
  itemIcon: {
    marginRight: 8
  },
  itemText: {
    color: "black"
  },
  webSiteLink: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    marginTop: 5,
    backgroundColor: "#F5F5F5"
  },
  textLink: {
    color: "gray",
    fontSize: 16,
    fontWeight: "400"
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
    fontSize: 16
  }
});
