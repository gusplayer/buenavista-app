import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HeaderTab from '../src/components/header';
import { Colors } from '../utils/const';
import Image from 'react-native-remote-svg';
import Swiper from 'react-native-web-swiper';

export default class HotelDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: true, icon: 'arrow-left', path: 'HotelList' };
    const rigthHeader = { data: false };
    const item = this.props.navigation.state.params.hotel;
    return (
      <View style={styles.container}>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <ScrollView style={styles.body}>
          <View style={styles.infoHotel}>
            {/* <Image style={styles.imageHotel} source={{ uri: item.imagen1 }} /> */}
            <View style={styles.imageHotel}>
              <Swiper>
                <View style={styles.slideContainer}>
                  <Image
                    style={styles.imageHotel}
                    source={{ uri: item.imagen1 }}
                  />
                </View>
                <View style={styles.slideContainer}>
                  <Image
                    style={styles.imageHotel}
                    source={{ uri: item.imagen2 }}
                  />
                </View>
                <View style={styles.slideContainer}>
                  <Image
                    style={styles.imageHotel}
                    source={{ uri: item.imagen3 }}
                  />
                </View>
              </Swiper>
            </View>
          </View>
          <View style={styles.redSeparator}>
            <Text style={styles.nameHotel}>{item.Hotel}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descripción</Text>
            <Text style={styles.descriptionText}>{item.Descripcion}</Text>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceContainerLeft}>
              <Text style={styles.descriptionTitle}>Precio por noche</Text>
            </View>
            <View style={styles.priceContainerRight}>
              <Text style={styles.precioText}>USD {item.Precio_Hotel}</Text>
              <Text style={styles.precioBuenavista}>
                USD {item.Precio_Buenavista}
              </Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Cupones</Text>
            <View style={styles.couponContainer}>
              <Image
                source={require('../src/assets/iconoscupones/premium/cm.png')}
                style={styles.imageCoupon}
              />
            </View>
          </View>
          {/* <View style={styles.webSiteLink}>
            <Text style={styles.textLink}>Ver mas información del hotel</Text>
          </View> */}
          <View style={styles.bookingButton}>
            <Text
              onPress={() => navigate('Booking')}
              style={styles.bookingText}
            >
              RESERVAR
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start'
  },
  body: {
    flex: 1,
    backgroundColor: 'white'
  },
  infoHotel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 200,
    marginTop: -5
  },
  imageHotel: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  redSeparator: {
    width: '100%',
    height: 35,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameHotel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  descriptionContainer: {
    padding: 20
  },
  descriptionTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: 'black',
    fontWeight: '600'
  },
  descriptionText: {
    color: 'black',
    textAlign: 'justify'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.red
  },
  priceContainerLeft: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    width: '55%',
    height: '100%'
  },
  priceContainerRight: {
    padding: 4,
    paddingHorizontal: 25,
    backgroundColor: Colors.red,
    alignItems: 'flex-end',
    width: '45%',
    height: '100%'
  },
  precioText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
    textDecorationLine: 'line-through'
  },
  precioBuenavista: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  },
  webSiteLink: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLink: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600'
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
  },
  couponContainer: {
    flexDirection: 'row'
  },
  imageCoupon: {
    marginTop: 2,
    marginLeft: 0,
    marginRight: 10,
    width: 55,
    height: 55
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)'
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)'
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)'
  }
});
