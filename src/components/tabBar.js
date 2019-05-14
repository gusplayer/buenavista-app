import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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
            source={require("../assets/iconos/bar-bottom/active/domain.png")}
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
            source={require("../assets/iconos/bar-bottom/gray/domain.png")}
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
            source={require("../assets/iconos/bar-bottom/active/search.png")}
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
            source={require("../assets/iconos/bar-bottom/gray/search.png")}
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
            source={require("../assets/iconos/bar-bottom/active/cupon.png")}
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
            source={require("../assets/iconos/bar-bottom/gray/cupon.png")}
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
            source={require("../assets/iconos/bar-bottom/active/notifications.png")}
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
            source={require("../assets/iconos/bar-bottom/gray/notifications.png")}
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
            source={require("../assets/iconos/bar-bottom/active/circle.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitleActive}> MEMEBRESÍA</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Membership")}
        >
          <Image
            source={require("../assets/iconos/bar-bottom/gray/circle.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tabTitle}> MEMEBRESÍA</Text>
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
    paddingHorizontal: 3,
    elevation: 4,
    backgroundColor: "white",
    marginLeft: -2
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
    fontSize: 9,
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
