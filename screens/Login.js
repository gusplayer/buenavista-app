import React from "react";
import API from "../utils/api";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import { Container, Form } from "native-base";
import { Bold, Colors } from "../utils/const";
import CheckedBox from "./CheckedBox";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FastImage from "react-native-fast-image";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: " ",
      password: " ",
      loading: false,
      messageError: false
    };
  }

  onPressLogin = async () => {
    const { navigate } = this.props.navigation;
    this.setState({ loading: true });
    let loginData = await API.getLogin(this.state.email, this.state.password);
    this.setState({ loading: false });
    if (loginData == true) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          loginData
        }
      });
    } else {
      this.setState({
        messageError: true
      });
    }
  };

  _getButtonLogin() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#808080" />;
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
      <KeyboardAwareScrollView
        style={{ backgroundColor: "transparent", flex: 1, height: "100%" }}
      >
        <Container>
          <ImageBackground
            source={require("../src/assets/fondo.jpg")}
            style={styles.container}
          >
            <View style={styles.header}>
              <FastImage
                source={require("../src/assets/logoBlanco.png")}
                style={{ width: 160, height: 93 }}
              />
            </View>

            <Form style={styles.form}>
              {this.state.messageError == true && (
                <View style={styles.errorLogin}>
                  <Text style={styles.textError}>
                    Error en los datos, intenta de nuevo.
                  </Text>
                </View>
              )}
              <View>
                <TextInput
                  keyboardType="numeric"
                  placeholderTextColor="#59617b"
                  placeholder={"Id Socio"}
                  style={styles.input}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  onChangeText={email => this.setState({ email })}
                />
              </View>
              <View>
                <TextInput
                  placeholderTextColor="#59617b"
                  placeholder={"Contraseña"}
                  secureTextEntry={true}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  onChangeText={password => this.setState({ password })}
                />
              </View>
              {this._getButtonLogin()}
            </Form>

            <View style={styles.footer}>
              <Text
                style={styles.linkForget}
                onPress={() => navigate("Register")}
              >
                No tengo cuenta <Bold>Registrarme</Bold>
              </Text>
              <Text style={styles.link} onPress={() => navigate("ForgetPass")}>
                ¿Olvidé contraseña?
              </Text>
            </View>

            <CheckedBox navigation={this.props.navigation} />
          </ImageBackground>
        </Container>
      </KeyboardAwareScrollView>
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
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#dcf4fb"
  },
  header: {
    flex: 3,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
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
    flex: 4,
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center"
  },
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 10,
    width: 300
  },
  terms: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "85%"
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
    fontWeight: "400",
    marginBottom: 5,
    marginTop: 9
  },
  linkForget: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 5,
    paddingTop: 5
  },
  termsText: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 5
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
  },
  errorLogin: {
    backgroundColor: "white",
    marginBottom: 10,
    width: 300,
    height: 40,
    borderRadius: 5,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center"
  },
  textError: {
    color: "#B1180F",
    fontSize: 14,
    fontWeight: "500"
  }
});
