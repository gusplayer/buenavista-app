import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  WebView,
  TouchableOpacity
} from 'react-native';
import HeaderTab from '../src/components/header';
import Image from 'react-native-remote-svg';
import TabBar from '../src/components/tabBar';
import { Colors } from '../utils/const';
import { Item, Input, Label, Form, Container } from 'native-base';

export default class Booking extends React.Component {
  constructor() {
    super();
  }

  render() {
    const leftHeader = { data: false };
    const rigthHeader = { data: false };
    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />
        <View style={styles.redSeparator}>
          <Text style={styles.nameHotel}>
            TE AYUDAMOS A ENCONTRAR TU ALOJAMIENTO IDEAL
          </Text>
        </View>

        <ScrollView style={styles.body}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.form}>
              <Item inlineLabel>
                <Label>Selecciona el país</Label>
                <Input />
              </Item>
              <Item inlineLabel>
                <Label>Selecciona la ciudad o provincia</Label>
                <Input />
              </Item>

              <Item inlineLabel>
                <Label>Hotel a reservar</Label>
                <Input />
              </Item>

              <Item inlineLabel>
                <Label>Tipo de habitación</Label>
                <Input />
              </Item>

              <View style={styles.dates}>
                <Item inlineLabel style={{ width: '45%' }}>
                  <Label>Fecha inicio</Label>
                  <Input />
                </Item>
                <Item inlineLabel style={{ width: '45%' }}>
                  <Label>Fecha fin</Label>
                  <Input />
                </Item>
              </View>

              <View style={styles.dates}>
                <Item inlineLabel style={{ width: '45%' }}>
                  <Label>Adultos</Label>
                  <Input />
                </Item>
                <Item inlineLabel style={{ width: '45%' }}>
                  <Label>Niños</Label>
                  <Input />
                </Item>
              </View>

              <Item inlineLabel>
                <Label>Aplicar cupón</Label>
                <Input />
              </Item>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigate('HotelList')}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonText}>ENVIAR SOLICITUD</Text>
          </TouchableOpacity>
        </ScrollView>

        <TabBar navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white'
  },
  form: {
    padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  dates: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  redSeparator: {
    width: '100%',
    height: 35,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameHotel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400'
  },
  buttonLogin: {
    width: 280,
    backgroundColor: Colors.gold,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 15,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '300'
  }
});
