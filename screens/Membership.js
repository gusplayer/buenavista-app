import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Colors } from '../utils/const';
import Image from 'react-native-remote-svg';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Tex
} from 'native-base';
import TabBar from '../src/components/tabBar';
import HeaderTab from '../src/components/header';
import Profile from './Profile';
import Benefits from './Benefits';
import CouponInfo from './CouponInfo';

export default class Membreship extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: false };
    const rigthHeader = { data: false };

    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <ScrollView style={styles.body}>
          <View style={styles.infoHotel}>
            <Image
              style={styles.imageHotel}
              source={require('../src/assets/tarjeta_clientes.png')}
            />
          </View>
          <Tabs>
            <Tab
              textStyle={{ color: 'red' }}
              heading={
                <TabHeading>
                  <Text>Perfil</Text>
                </TabHeading>
              }
            >
              <Profile />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text>Beneficios</Text>
                </TabHeading>
              }
            >
              <Benefits />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text>Cupones</Text>
                </TabHeading>
              }
            >
              <CouponInfo />
            </Tab>
          </Tabs>
          <View style={styles.bookingButton}>
            <Text onPress={() => navigate('Login')} style={styles.bookingText}>
              Cerrar Sesión
            </Text>
          </View>
        </ScrollView>
        <TabBar navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: '#dcf4fb'
  },
  bookingButton: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookingText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 18
  }
});
