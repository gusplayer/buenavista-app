import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Image from "react-native-remote-svg";
import Icon from "react-native-vector-icons/Feather";

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem} onPress={() => navigate("Dash")}>
        <Icon name="home" style={styles.tabIcon} />
        <Text style={styles.tabTitle}> CATÁLOGO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => navigate("Soon")}>
        <Icon name="message-circle" style={styles.tabIcon} />
        <Text style={styles.tabTitle}> RESERVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigate("Sales")}
      >
        <Icon name="trending-up" style={styles.tabIcon} />
        <Text style={styles.tabTitle}> CUPONES</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => navigate("Soon")}>
        <Icon name="settings" style={styles.tabIcon} />
        <Text style={styles.tabTitle}> NOTIFICACIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => navigate("Soon")}>
        <Icon name="settings" style={styles.tabIcon} />
        <Text style={styles.tabTitle}> MEMEBRESIA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 5,
    elevation: 4,
    backgroundColor: "white"
  },
  tabItem: {
    alignItems: "center"
  },
  tabIcon: {
    color: "#90a4ae",
    fontSize: 23,
    fontWeight: "100"
  },
  tabTitle: {
    marginTop: 3,
    fontSize: 10,
    color: "#90a4ae"
  },
  tabCart: {
    backgroundColor: "#f1c40f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: 55,
    width: 55,
    elevation: 3,
    marginTop: 0
  },
  tabCartIcon: {
    color: "black",
    fontSize: 26,
    fontWeight: "100"
  },
  tabCartTitle: {
    marginTop: 3,
    fontSize: 10,
    color: "#90a4ae"
  }
});

export default TabBar;
