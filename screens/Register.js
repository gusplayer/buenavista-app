import React from 'react';
import API from '../utils/api';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'native-base';
import { Bold, Colors } from '../utils/const';
import Image from 'react-native-remote-svg';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ' ',
      password: ' ',
      passwordRepeat: ' ',
      loading: false,
      messageError: false,
      showPasswordInput: false
    };
  }
  onPressLogin = async () => {
    const { navigate } = this.props.navigation;
    this.setState({ loading: true });
    let userExist = await API.getRegister(this.state.email);
    this.setState({ loading: false });
    if (userExist == true) {
      this.setState({
        showPasswordInput: true,
        messageError: false
      });
    } else {
      this.setState({
        messageError: true
      });
    }
  };
  _getButtonVerifyUser() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      return (
        <TouchableOpacity
          onPress={this.onPressLogin}
          style={styles.buttonLogin}
        >
          <View style={styles.alignButton}>
            <Text style={styles.buttonText}>REGISTRAR USUARIO</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  onPressRegister = async () => {
    const { navigate } = this.props.navigation;
    this.setState({ loading: true });
    let changePass = await API.getRegister(
      this.state.email,
      this.state.password
    );
    this.setState({ loading: false });
    if (changePass == true) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          changePass
        }
      });
    }
  };
  _getButtonRegister() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      return (
        <TouchableOpacity
          onPress={this.onPressRegister}
          style={styles.buttonLogin}
        >
          <View style={styles.alignButton}>
            <Text style={styles.buttonText}>CREAR CUENTA</Text>
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
        source={require('../src/assets/fondo.jpg')}
        style={styles.container}
      >
        <KeyboardAvoidingView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
        >
          <View style={styles.header}>
            <Image
              source={require('../src/assets/logoBlanco.png')}
              style={{ width: 160, height: 93 }}
            />
          </View>

          <View style={styles.form}>
            {this.state.messageError == true && (
              <View style={styles.errorLogin}>
                <Text style={styles.textError}>
                  Usuario no existe ó ya esta registrado.
                </Text>
              </View>
            )}
            <View>
              <TextInput
                keyboardType="numeric"
                placeholderTextColor="#59617b"
                placeholder={'Id Socio'}
                style={styles.input}
                underlineColorAndroid="rgba(0,0,0,0)"
                onChangeText={email => this.setState({ email })}
              />
            </View>
            {this.state.showPasswordInput == true && (
              <View>
                <TextInput
                  placeholderTextColor="#59617b"
                  placeholder={'Contraseña'}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  onChangeText={password => this.setState({ password })}
                />
              </View>
            )}
            {this.state.showPasswordInput == true && (
              <View>
                <TextInput
                  placeholderTextColor="#59617b"
                  placeholder={'Confirmar contraseña'}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  onChangeText={password => this.setState({ password })}
                />
              </View>
            )}
            {this.state.showPasswordInput == true
              ? this._getButtonRegister()
              : this._getButtonVerifyUser()}
          </View>

          <View style={styles.footer}>
            <Text style={styles.link} onPress={() => navigate('Login')}>
              Ya tengo cuenta <Bold>Iniciar sesión</Bold>
            </Text>
          </View>

          <View style={styles.terms}>
            <CheckBox checked={true} color="#c3b381" />
            <Text style={styles.termsText} onPress={() => navigate('Terms')}>
              Al ingresar aceptarás los <Bold>términos y condiciones</Bold>
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

export default connect(mapStateToProps)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: '#dcf4fb'
  },
  header: {
    flex: 3,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    flexDirection: 'column'
  },
  textWelcome: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  form: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 10,
    width: 300
  },
  terms: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '85%'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 5,
    color: '#59617b'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    color: '#59617b'
  },
  link: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400'
  },
  termsText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 5
  },
  input: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 300,
    paddingLeft: 45,
    borderRadius: 5,
    color: '#59617b',
    fontWeight: '300',
    marginBottom: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#59617b',
    shadowOffset: { width: 0, height: 2 }
  },
  textFooter: {
    textAlign: 'center'
  },
  alignButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonLogin: {
    width: 280,
    backgroundColor: Colors.gold,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 5,
    elevation: 2
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '300'
  },
  errorLogin: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: 300,
    height: 40,
    borderRadius: 5,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textError: {
    color: '#B1180F',
    fontSize: 14,
    fontWeight: '500'
  }
});
