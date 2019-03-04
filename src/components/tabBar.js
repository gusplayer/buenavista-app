import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Image from "react-native-remote-svg";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../utils/const";

const TabBar = ({ navigation, position }) => {
  return (
    <View style={styles.tabBar}>
      {position == 1 ? (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("HotelList")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/active/domain.svg")}
            style={styles.imageIcon}
          />
          <Text style={styles.tabTitleActive}> CATÁLOGO</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("HotelList")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/gray/domain.svg")}
            style={styles.imageIcon}
          />
          <Text style={styles.tabTitle}> CATÁLOGO</Text>
        </TouchableOpacity>
      )}

      {position == 2 ? (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Booking")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/active/search.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitleActive}> RESERVAR</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Booking")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/gray/search.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitle}> RESERVAR</Text>
        </TouchableOpacity>
      )}

      {position == 3 ? (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("CouponsView")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/active/cupon.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitleActive}> CUPONES</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("CouponsView")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/gray/cupon.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitle}> CUPONES</Text>
        </TouchableOpacity>
      )}

      {position == 4 ? (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Notification")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/active/notifications.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitleActive}> NOTIFICACIÓN</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Notification")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/gray/notifications.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitle}> NOTIFICACIÓN</Text>
        </TouchableOpacity>
      )}

      {position == 5 ? (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Membership")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/active/circle.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitleActive}> MEMEBRESIA</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Membership")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/gray/circle.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitle}> MEMEBRESIA</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
    elevation: 4,
    backgroundColor: "white"
  },
  tabItem: {
    flex: 1,
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
  tabTitleActive: {
    marginTop: 3,
    fontSize: 9,
    color: Colors.red
  },
  imageIcon: {
    height: 23,
    width: 23
  }
});

export default TabBar;
