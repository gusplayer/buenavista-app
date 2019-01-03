import React from "react";
import API from "../../utils/api";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

class LoginMail extends React.Component {
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
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
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
            source={require("../../src/assets/komercianegro.png")}
          />
          <Image
            resizeMode={"cover"}
            style={{ width: 280, height: 150 }}
            source={{
              uri:
                "https://www.tibco.com/blog/wp-content/uploads/2017/09/rsz_bigstock-mobile-app-design-and-user-int-172296434.jpg"
            }}
          />
        </View>

        <View style={styles.textWelcome}>
          <Text style={styles.subtitle}>Ingresa a tu panel de control</Text>
        </View>

        <View style={styles.form}>
          <View>
            <TextInput
              placeholderTextColor="#59617b"
              placeholder={"Correo Electrónico"}
              style={styles.input}
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor="#59617b"
              placeholder={"Tu Contraseña"}
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          {this._getButtonLogin()}
        </View>

        {/* <View style={styles.footer}>
          <Text style={styles.link} onPress={() => navigate("ForgetPass")}>
            ¿Olvidaste tu contraseña?
          </Text>
        </View> */}
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state };
};

export default connect(mapStateToProps)(LoginMail);

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
    color: "#59617b",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "600"
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
    fontWeight: "600",
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
    width: 300,
    backgroundColor: "#f14b5a",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 8
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: "900"
  }
});
