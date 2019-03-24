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
import Modal from 'react-native-modal';

export default class ForgetPass extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ' ',
      password: ' ',
      loading: false,
      messageError: '',
      isModalVisible: false
    };
  }
  modal() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.modalContent}>
        <View
          style={{
            padding: 28,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 16, marginBottom: 15 }}>
            Una nueva contraseña ha sido enviada a tu correo electronico.
          </Text>
          <Text
            style={styles.linkForgetModal}
            onPress={() => {
              this.setState({ isModalVisible: false });
              navigate('Login');
            }}
          >
            <Bold>Volver al Inicio</Bold>
          </Text>
        </View>
      </View>
    );
  }
  onPressButton = () => {
    this.setState({ isModalVisible: true });
    // this.setState({ loading: true });
  };

  _getButtonForgetPass() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      return (
        <TouchableOpacity
          // onPress={this.onPressLogin}
          onPress={this.onPressButton}
          style={styles.buttonForgetPass}
        >
          <View style={styles.alignButton}>
            <Text style={styles.buttonText}>
              <Bold>RECUPERAR CONTRASEÑA</Bold>
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../src/assets/fondo.jpg')}
        style={styles.container}
      >
        <View style={styles.header}>
          <Image
            source={require('../src/assets/logoBlanco.png')}
            style={{ width: 160, height: 93 }}
          />
        </View>

        <View style={styles.formForgetPass}>
          <View>
            <TextInput
              keyboardType="numeric"
              placeholderTextColor="#59617b"
              placeholder={'Id Socio'}
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>

          {this._getButtonForgetPass()}
        </View>

        <View style={styles.footer}>
          <Text style={styles.linkForget} onPress={() => navigate('Login')}>
            Volver al <Bold>Inicio de sesión</Bold>
          </Text>
          <Text style={styles.link} onPress={() => navigate('ForgetPass')}>
            ¿Olvidé contraseña?
          </Text>
        </View>

        <View style={styles.terms}>
          <CheckBox checked={true} color="#c3b381" />
          <Text style={styles.termsText} onPress={() => navigate('Terms')}>
            Al ingresar aceptarás los <Bold>términos y condiciones</Bold>
          </Text>
        </View>

        <Modal isVisible={this.state.isModalVisible}>{this.modal()}</Modal>
      </ImageBackground>
    );
  }
}

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
    flex: 2,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formForgetPass: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 300
  },
  terms: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '85%',
    paddingTop: 20
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
    fontWeight: '400',
    marginBottom: 5,
    marginTop: 9
  },
  linkForget: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5,
    paddingTop: 5
  },
  linkForgetModal: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5,
    paddingTop: 5
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
    marginTop: 15,
    elevation: 2
  },
  buttonForgetPass: {
    width: 280,
    backgroundColor: Colors.gold,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    // borderBottomColor: 'white',
    // borderRightColor: 'white',
    // borderLeftColor: 'white',
    // borderTopColor: 'white',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: '200'
  },
  modalContent: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalIcon: {
    color: 'gray',
    fontSize: 35,
    marginBottom: 10,
    marginTop: 10
  }
});
