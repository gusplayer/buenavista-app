import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';
import { Container, Header, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

export default class HeaderTab extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Image
              source={require('../assets/Logo.svg')}
              style={{ width: 200, height: 70 }}
            />
          </Body>
          <Right>
            <TouchableOpacity onPress={() => navigate('Profile')}>
              <Icon name="align-center" size={23} color="gray" />
            </TouchableOpacity>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  }
});
