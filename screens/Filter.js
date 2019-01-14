import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, Bold } from '../utils/const';
import { Item, Input, Label, Form } from 'native-base';

export default class Filter extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.contentText}>
          <Text style={styles.textBold}>Filtrar por:</Text>
          <View style={styles.form}>
            <Item inlineLabel>
              <Label>Selecciona el país</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Selecciona la ciudad o provincia</Label>
              <Input />
            </Item>
          </View>

          <Text style={styles.textBold}>Ordenar precios:</Text>
          <View style={styles.form}>
            <Text style={styles.filterPrice}>Precio de mayor a menor</Text>
            <Text style={styles.filterPrice}>Precio de menor a mayor</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigate('HotelList')}
          style={styles.buttonLogin}
        >
          <View style={styles.alignButton}>
            <Text style={styles.buttonText}>APLICAR</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 24,
    paddingTop: 30
  },
  contentText: {
    width: '100%',
    alignItems: 'flex-start'
  },
  textBold: {
    fontWeight: '800',
    fontSize: 16,
    color: 'black'
  },
  form: {
    marginVertical: 15,
    marginBottom: 22
  },
  alignButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterPrice: {
    fontSize: 16,
    marginBottom: 10
  },
  buttonLogin: {
    width: 280,
    backgroundColor: Colors.gold,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 35
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
