import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors, Bold } from "../utils/const";
import API from "../utils/api";

export default class Benefits extends React.Component {
  constructor() {
    super();
    this.state = {
      benefits: []
    };
  }

  async componentDidMount() {
    const benefitsAPI = await API.getBeneficios();
    this.setState({
      benefits: benefitsAPI,
      loading: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Diseñada para dar la mayor cobertura de beneficios a nuestros
          distinguidos miembros, ampliando tu abanico de opciones a destinos,
          ademas de nuestro servicio All Inclusive.
        </Text>
        <View style={styles.itemList}>
          <View style={styles.itemInfo}>
            <Icon
              name="plus-circle"
              size={23}
              color={Colors.gold}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>
              Acceso a Hoteles Gold / Destinos internacionales
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Icon
              name="plus-circle"
              size={23}
              color={Colors.gold}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>
              Acceso a Hoteles Premium / Hoteles Nacionales
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Icon
              name="plus-circle"
              size={23}
              color={Colors.gold}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Acceso a servicio All Inclusive</Text>
          </View>
          <View style={styles.itemInfo}>
            <Icon
              name="plus-circle"
              size={23}
              color={Colors.gold}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>19 noches</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20
  },
  itemList: {
    marginVertical: 20,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  itemInfo: {
    flexDirection: "row",
    marginBottom: 9
  },
  itemIcon: {
    marginRight: 15,
    marginLeft: 10
  },
  itemText: {
    color: "black"
  }
});
