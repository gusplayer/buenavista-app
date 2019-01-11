import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../utils/const';

const TabBar = ({ navigation }) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('HotelList')}
      >
        <Image
          source={require('../assets/iconos/bar-bottom/active/domain.svg')}
          style={styles.imageIcon}
        />
        <Text style={styles.tabTitleActive}> CATÁLOGO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('Booking')}
      >
        <Image
          source={require('../assets/iconos/bar-bottom/gray/search.svg')}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.tabTitle}> RESERVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('CouponAvalible')}
      >
        <Image
          source={require('../assets/iconos/bar-bottom/gray/cupon.svg')}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.tabTitle}> CUPONES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('Terms')}
      >
        <Image
          source={require('../assets/iconos/bar-bottom/gray/notifications.svg')}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.tabTitle}> NOTIFICACIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('Terms')}
      >
        <Image
          source={require('../assets/iconos/bar-bottom/gray/circle.svg')}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.tabTitle}> MEMEBRESIA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
    elevation: 4,
    backgroundColor: 'white'
  },
  tabItem: {
    alignItems: 'center'
  },
  tabIcon: {
    color: '#90a4ae',
    fontSize: 23,
    fontWeight: '100'
  },
  tabTitle: {
    marginTop: 3,
    fontSize: 10,
    color: '#90a4ae'
  },
  tabTitleActive: {
    marginTop: 3,
    fontSize: 10,
    color: Colors.red
  },
  imageIcon: {
    height: 23,
    width: 23
  }
});

export default TabBar;
