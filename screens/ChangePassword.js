import React from 'react';
//import API from '../utils/api';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import { Colors, Bold } from '../utils/const';
import API from '../utils/api';

export default class ChangePassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      passwordRepeat: '',
      loading: false,
      messageErrorPassword: false,
      messageErrorEmpty: false,
      isModalVisible: false
    };
  }

  onPressChangePass = async () => {
    this.setState({ messageErrorEmpty: false, messageErrorPassword: false });
    if (this.state.password == '') {
      this.setState({ messageErrorEmpty: true });
    } else {
      if (this.state.password === this.state.passwordRepeat) {
        this.setState({ loading: true });
        let changePass = await API.getChangePassAuth(this.state.password);
        this.setState({ loading: false });
        if (changePass == true) {
          this.setState({ isModalVisible: true });
        }
      } else {
        this.setState({ messageErrorPassword: true });
      }
    }
  };

  _getButtonChangePass() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#808080" />;
    } else {
      return (
        <TouchableOpacity
          onPress={this.onPressChangePass}
          style={styles.buttonLogin}
        >
          <View style={styles.alignButton}>
            <Text style={styles.buttonText}>CAMBIAR CLAVE</Text>
          </View>
        </TouchableOpacity>
      );
    }
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
          <Image
            source={require('../src/assets/Logo.png')}
            style={{ width: 150, height: 20, marginLeft: -15 }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginBottom: 15,
              marginTop: 10
            }}
          >
            Tu contraseña ha sido actualizada.
          </Text>
          <Text
            style={styles.linkForgetModal}
            onPress={() => {
              this.setState({ isModalVisible: false });
              navigate('Membership');
            }}
          >
            <Bold>Continuar</Bold>
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../src/assets/fondo.jpg')}
            style={{
              height: 250,
              width: '100%'
            }}
          />
        </View>
        <View style={styles.textWelcome}>
          <Image
            source={require('../src/assets/iconoApp/iconsCupones.png')}
            style={{ width: 61, height: 61 }}
          />
          <Text style={styles.textInfo}>
            Gracias por ingresar a nuestra app. {'\n'}Te invitamos a cambiar tu
            {'\n'}
            contraseña por la que mas te guste
          </Text>
        </View>

        <View style={styles.form}>
          {this.state.messageErrorEmpty == true && (
            <View style={styles.errorLogin}>
              <Text style={styles.textError}>
                Los campos no pueden ser vacios.
              </Text>
            </View>
          )}
          {this.state.messageErrorPassword == true && (
            <View style={styles.errorLogin}>
              <Text style={styles.textError}>
                Las contraseñas deben ser iguales.
              </Text>
            </View>
          )}
          <View>
            <TextInput
              secureTextEntry={true}
              placeholderTextColor="#59617b"
              placeholder={'Nueva contraseña'}
              style={styles.input}
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholderTextColor="#59617b"
              placeholder={'Confirmar contraseña'}
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={passwordRepeat => this.setState({ passwordRepeat })}
            />
          </View>
          {this._getButtonChangePass()}
        </View>
        <Modal isVisible={this.state.isModalVisible}>{this.modal()}</Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  header: {
    height: 250,
    width: '100%',
    backgroundColor: 'red'
  },
  textWelcome: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.red,
    flexDirection: 'row',
    paddingHorizontal: 18
  },
  textInfo: {
    color: 'white',
    fontSize: 15,
    marginLeft: 5,
    width: '100%'
  },
  form: {
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkForget: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5,
    paddingTop: 5
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
  },
  linkForgetModal: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5,
    paddingTop: 5
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    color: '#59617b'
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '300'
  },
  textError: {
    color: '#B1180F',
    fontSize: 14,
    fontWeight: '500'
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
  }
});
