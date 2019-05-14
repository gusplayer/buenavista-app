import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "native-base";
import { Bold } from "../utils/const";

export default class CheckedBox extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      messageError: false,
      isModalVisible: false,
      idsocio: "",
      checked: true
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.terms}>
        <CheckBox
          checked={this.state.checked}
          color="#c3b381"
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <Text style={styles.termsText} onPress={() => navigate("Terms")}>
          Al ingresar aceptarás los <Bold>términos y condiciones</Bold>
        </Text>
      </View>
    );
  }
}

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
  terms: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "85%"
  },
  termsText: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 5
  }
});
