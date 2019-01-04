import React from "react";
import API from "../utils/api";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";

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
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      return (
        <TouchableOpacity
          onPress={this.onPressLogin}
          style={styles.buttonLogin}
        >
          <View style={styles.alignButton}>
            <Text style={styles.buttonText}>INGRESAR</Text>
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
      <ImageBackground
        source={require("../src/assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAvoidingView
          style={styles.container}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
        >
          <View style={styles.header}>
            <Image
              style={{
                width: 130,
                height: 23,
                alignSelf: "center",
                marginBottom: 50
              }}
              source={require("../src/assets/Logo.svg")}
            />
          </View>

          <View style={styles.form}>
            <View>
              <TextInput
                placeholderTextColor="#59617b"
                placeholder={"Cédula"}
                style={styles.input}
                underlineColorAndroid="rgba(0,0,0,0)"
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View>
              <TextInput
                placeholderTextColor="#59617b"
                placeholder={"Contraseña"}
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={password => this.setState({ password })}
              />
            </View>
            {this._getButtonLogin()}
          </View>

          <View style={styles.footer}>
            <Text style={styles.link} onPress={() => navigate("ForgetPass")}>
              ¿Olvidé contraseña?
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state };
};

export default connect(mapStateToProps)(Login);

// Dorado #c3b381
// Rojo  #9e2523
// Azul    #004584
// Naranja #db5d2a
// Cafe    #7d4a25
// Verde   #4d4f27

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#dcf4fb"
  },
  header: {
    flex: 7,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#dcf4fb",
    paddingTop: 20,
    flexDirection: "column"
  },
  textWelcome: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  form: {
    flex: 5,
    alignContent: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
    color: "#59617b"
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
    color: "#59617b"
  },
  link: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "500"
  },
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    width: 300
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
  textFooter: {
    textAlign: "center"
  },
  alignButton: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonLogin: {
    width: 280,
    backgroundColor: "#c3b381",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 8
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
