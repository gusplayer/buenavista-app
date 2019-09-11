import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  WebView,
  ActivityIndicator
} from "react-native";
import HeaderTab from "../src/components/header";
import Image from "react-native-remote-svg";
import { Container } from "native-base";
import TabBar from "../src/components/tabBar";
import API from "../utils/api";

export default class Notification extends React.Component {
  constructor() {
    super();
    this.state = {
      listNotificaciones: [],
      loading: true
    };
    this.datainit();
  }

  async datainit() {
    const notificaciones = await API.listaNotificaciones();
    this.setState({
      listNotificaciones: notificaciones.data.data,
      loading: false
    });
  }

  listViewNotificaciones() {
    if (
      undefined !== this.state.listNotificaciones &&
      this.state.listNotificaciones.length !== 0
    ) {
      return this.state.listNotificaciones.map(x => {
        return (
          <View
            style={{
              elevation: 0,
              borderRadius: 3,
              backgroundColor: "white",
              width: "90%",
              margin: 5,
              padding: 10,
              justifyContent: "flex-start",
              alignItems: "center",

              paddingHorizontal: 15,
              elevation: 1,
              flexDirection: "row"
            }}
          >
            <Image
              style={{ width: 40, height: 40, borderRadius: 25 }}
              source={require("../src/assets/notify.jpg")}
            ></Image>
            <View style={{ marginLeft: 17, width: "80%" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  marginBottom: 5,
                  color: "black"
                }}
              >
                {x.title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  marginBottom: 2,
                  color: "black"
                }}
              >
                {x.message}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 12, height: 12 }}
                  source={{
                    uri:
                      "https://images.vexels.com/media/users/3/132607/isolated/preview/86e952b378eaa8c5ea573fa2bf280d5b-icono-de-reloj-de-pared-by-vexels.png"
                  }}
                ></Image>
                <Text
                  style={{ fontSize: 12, fontWeight: "300", marginLeft: 6 }}
                >
                  {x.date_publication}
                </Text>
              </View>
            </View>
          </View>
        );
      });
    } else {
      return <Text>No data</Text>;
    }
  }

  render() {
    const leftHeader = { data: false };
    const rigthHeader = { data: false };
    if (this.state.loading) {
      return (
        <Container>
          <View style={styles.body}>
            <ActivityIndicator
              size="large"
              color="#f14b5a"
              style={{ marginTop: 100 }}
            />
            <Text>Cargando Notificaciones</Text>
          </View>
        </Container>
      );
    }
    if (
      undefined !== this.state.listNotificaciones &&
      this.state.listNotificaciones.length == 0
    ) {
      return (
        <Container>
          <HeaderTab
            navigation={this.props.navigation}
            left={leftHeader}
            right={rigthHeader}
          />
          <View style={styles.body}>
            <Image
              source={require("../src/assets/iconos/login/mail.png")}
              style={styles.imageIcon}
            />
            <Text style={styles.text}>No tienes notificaciones</Text>
          </View>
          <TabBar navigation={this.props.navigation} position={4} />
        </Container>
      );
    }
    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.body}>{this.listViewNotificaciones()}</View>
        </ScrollView>
        <TabBar navigation={this.props.navigation} position={4} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  scroll: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  text: {
    fontSize: 18,
    width: 300,
    textAlign: "center",
    color: "black",
    marginTop: 20
  },
  imageIcon: {
    width: 90,
    height: 90
  }
});
