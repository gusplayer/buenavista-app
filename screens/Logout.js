import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  WebView,
  ActivityIndicator
} from 'react-native';
import Image from 'react-native-remote-svg';
import { Container } from 'native-base';
import { connect } from 'react-redux';

class Logout extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const loginData = false;
    setTimeout(() => {
      this.props.dispatch({
        type: 'LOGOUT',
        payload: {
          loginData
        }
      });
    }, 2000);
  }

  render() {
    return (
      <Container>
        <View style={styles.body}>
          <ActivityIndicator size="large" color="#808080" />
          <Text style={styles.text}>Cerrando sesión...</Text>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state };
};

export default connect(mapStateToProps)(Logout);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    width: 300,
    textAlign: 'center',
    color: 'black',
    marginTop: 20
  },
  imageIcon: {
    width: 90,
    height: 90
  }
});
