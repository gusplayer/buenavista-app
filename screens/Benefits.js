import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, Bold } from '../utils/const';
import API from '../utils/api';

export default class Benefits extends React.Component {
  constructor() {
    super();
    this.state = {
      benefits: ' '
    };
  }

  async componentDidMount() {
    const benefitsAPI = await API.getBenefits();
    this.setState({
      benefits: benefitsAPI[0],
      loading: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.benefits.Description}</Text>
        <View style={styles.itemList}>
          {this.state.benefits.Beneficio1 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio1}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio2 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio2}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio3 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio3}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio4 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio4}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio5 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio5}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio6 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio6}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio7 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio7}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio8 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio8}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio9 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio9}
              </Text>
            </View>
          )}
          {this.state.benefits.Beneficio0 != '' && (
            <View style={styles.itemInfo}>
              <Icon
                name="plus-circle"
                size={23}
                color={Colors.gold}
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>
                {this.state.benefits.Beneficio0}
              </Text>
            </View>
          )}
          {/* <View style={styles.itemInfo}>
            <Icon
              name="plus-circle"
              size={23}
              color={Colors.gold}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Acceso a servicio All Inclusive</Text>
          </View> */}
          {/* <View style={styles.itemInfo}>
            <Icon
              name="plus-circle"
              size={23}
              color={Colors.gold}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>19 noches</Text>
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  itemList: {
    marginVertical: 20,
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  itemInfo: {
    flexDirection: 'row',
    marginBottom: 9
  },
  itemIcon: {
    marginRight: 15,
    marginLeft: 10
  },
  itemText: {
    color: 'black'
  }
});
