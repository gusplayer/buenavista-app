import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors, Bold } from "../utils/const";
import API from "../utils/api";
import ImagePicker from "react-native-image-picker";
import { Button } from "native-base";
import { connect } from "react-redux";
import Moment from "moment";
import "moment/locale/es";

const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "null"
  }
};

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profileData: "",
      loading: true,
      loadingPhoto: true,
      imageSource: "",
      saveChangesViews: false
    };
  }

  async componentDidMount() {
    const profileAPI = await API.getProfile();
    const imageProfileAPI = await API.getImageProfile();
    this.setState({
      profileData: profileAPI[0],
      imageSource: imageProfileAPI[0].detInfo,
      loading: false,
      loadingPhoto: false
    });
  }

  _galery() {
    this.setState({
      loadingPhoto: true
    });
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.warn("User cancelled image picker");
      } else if (response.error) {
        console.warn("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.warn("User tapped custom button: ", response.customButton);
      } else {
        const base64img = "data:image/jpeg;base64," + response.data;
        this.setState({
          imageSource: base64img,
          saveChangesViews: true
        });
        this.changeImage(base64img);
      }
    });
  }

  changeImage = async () => {
    const imageReponse = await API.updateImageProfile(this.state.imageSource);
    console.warn(imageReponse);
    this.setState({
      loadingPhoto: false
    });
  };

  logout() {
    const loginData = false;
    this.props.dispatch({
      type: "LOGIN",
      payload: {
        loginData
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    var march = Moment(this.state.profileData.faFechaCaducidad);
    march.locale("es");
    return (
      <View style={styles.container}>
        {this.state.loadingPhoto == true ? (
          <TouchableHighlight style={styles.contentPhoto}>
            <ActivityIndicator
              size="large"
              color="#f14b5a"
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "100%"
              }}
            />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight
            style={styles.contentPhoto}
            onPress={() => this._galery()}
          >
            <Image
              style={styles.photoUser}
              source={{
                uri: this.state.imageSource
              }}
            />
          </TouchableHighlight>
        )}
        <View>
          {/* <Button
            onPress={() => this.changeImage()}
            bordered
            style={{ paddingHorizontal: 10, marginBottom: 20 }}
          >
            <Text style={{ color: "blue" }}>Guardar cambios</Text>
          </Button> */}
        </View>
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

          {this.state.loading == false && (
            <View style={styles.itemInfo}>
              <Icon
                name="disc"
                size={20}
                color="gray"
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                <Bold>Fecha Caducidad </Bold>
                {march.format("d MMMM YYYY")}
              </Text>
            </View>
          )}

          <View style={styles.itemInfo}>
            <Icon name="mail" size={20} color="gray" style={styles.itemIcon} />
            <Text style={styles.itemText}>
              {this.state.profileData.clEmail}
            </Text>
          </View>
        </View>
        <TouchableHighlight
          style={styles.webSiteLink}
          onPress={() => navigate("Terms")}
        >
          <Text style={styles.textLink}>Ver términos y condiciones</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.webSiteLink}
          onPress={() => navigate("ChangePassword")}
        >
          <Text style={styles.textLink}>Cambiar contraseña</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.bookingButton}
          onPress={() => navigate("Logout")}
        >
          <Text style={styles.bookingText}>Cerrar Sesión</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state };
};

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    padding: 20
  },
  contentPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 1
  },
  photoUser: {
    width: 100,
    height: 100,
    borderRadius: 50
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
    marginTop: 0,
    marginBottom: 5,
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
