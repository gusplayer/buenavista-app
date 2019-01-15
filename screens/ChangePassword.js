import React from "react";
import API from "../utils/api";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { Colors } from "../utils/const";
import Image from "react-native-remote-svg";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: " ",
      password: " ",
      loading: false,
      messageError: ""
    };
  }
  onPressLogin = () => {
    this.setState({ loading: true });
    API.postLogin(this.state.email, this.state.password)
      .then(response => {
        console.warn("hasta aqui vamos bien");
        let token = response.data.access_token;
        this.props.dispatch({
          type: "LOGIN",
          payload: {
            token
          }
        });
      })
      .catch(() => {
        console.warn("Los datos no coinciden");
        this.setState({
          loading: false,
          messageError: "Los datos no coindien por favor intenta de nuevo"
        });
      });
  };
  _getButtonLogin() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      return (
        <TouchableOpacity
          // onPress={this.onPressLogin}
          onPress={() => navigate("HotelList")}
          style={styles.buttonLogin}
        >
          <View style={styles.alignButton}>
            <Text style={styles.buttonText}>ENVIAR</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  _getMessageError = () => {
    return <Text />;
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../src/assets/fondo.jpg")}
            style={{
              height: 250,
              width: "100%"
            }}
          />
        </View>

        <View style={styles.textWelcome}>
          <Image
            source={require("../src/assets/iconoApp/iconsCupones.png")}
            style={{ width: 61, height: 61 }}
          />
          <Text style={styles.textInfo}>
            Gracias por ingresar a nuestra app. {"\n"}Te invitamos a cambiar tu{" "}
            {"\n"}
            contraseña por la que mas te guste
          </Text>
        </View>

        <View style={styles.form}>
          <View>
            <TextInput
              placeholderTextColor="#59617b"
              placeholder={"Nueva contraseña"}
              style={styles.input}
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor="#59617b"
              placeholder={"Confirmar contraseña"}
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          {this._getButtonLogin()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  header: {
    height: 250,
    width: "100%",
    backgroundColor: "red"
  },
  textWelcome: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.red,
    flexDirection: "row",
    paddingHorizontal: 18
  },
  textInfo: {
    color: "white",
    fontSize: 15,
    marginLeft: 5,
    width: "100%"
  },
  form: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
    color: "#59617b"
  },
  input: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 300,
    paddingLeft: 45,
    borderRadius: 5,
    color: "#59617b",
    fontWeight: "300",
    marginBottom: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: "#59617b",
    shadowOffset: { width: 0, height: 2 }
  },
  alignButton: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonLogin: {
    width: 280,
    backgroundColor: Colors.gold,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 15,
    elevation: 2
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: "300"
  }
});
