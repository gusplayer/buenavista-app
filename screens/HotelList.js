import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';
import HeaderTab from '../src/components/header';
import TabBar from '../src/components/tabBar';
import { Colors } from '../utils/const';
import { Container } from 'native-base';
import API from '../utils/api';

export default class HotelList extends React.Component {
  async componentDidMount() {
    const hotelAPI = await API.getHotelList();
    this.setState({
      hotelList: hotelAPI,
      loading: false
    });
  }

  constructor() {
    super();
    this.state = {
      hotelList: [],
      loading: true
    };
  }

  _getHotels() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#f14b5a" />
        </View>
      );
    }
    return (
      <FlatList
        style={styles.flatList}
        data={this.state.hotelList}
        keyExtractor={(item, _) => item.imagen1}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() =>
              navigate('HotelDetails', {
                hotel: item
              })
            }
          >
            <View style={styles.itemList}>
              {item.imagen1 != '' && (
                <View style={styles.infoProduct}>
                  <Image
                    style={styles.imageHotel}
                    source={{ uri: item.imagen1 }}
                  />

                  <View style={styles.itemListText}>
                    <Text style={styles.nameHotel}>{item.Hotel}</Text>
                    <Text style={styles.nameCity}>
                      {item.Ciudad}, {item.Pais}
                    </Text>
                  </View>
                  <View style={styles.priceHotel}>
                    <Text style={styles.nitePriceText}>Precio por noche</Text>
                    <View style={styles.preciosContent}>
                      <Text style={styles.precioText}>
                        USD {item.Precio_Hotel}
                      </Text>
                      <Text style={styles.precioBuenavista}>
                        USD {item.Precio_Buenavista}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftHeader = { data: false };
    const rigthHeader = { data: true, icon: 'sliders', path: 'Filter' };

    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />

        <ScrollView style={styles.body}>{this._getHotels()}</ScrollView>
        <TabBar navigation={this.props.navigation} position={1} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  body: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  flatList: {
    width: '100%',
    marginTop: 10
  },
  itemList: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 5,
    alignItems: 'center'
  },
  infoProduct: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    height: 300,
    elevation: 3,
    marginBottom: 15
  },
  itemListText: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    padding: 12,
    elevation: 2
  },
  imageHotel: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  nameHotel: {
    fontWeight: '600',
    color: 'black',
    fontSize: 17
  },
  nameCity: {
    fontWeight: '300',
    color: 'black',
    fontSize: 13
  },
  priceHotel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 12,
    paddingVertical: 5,
    backgroundColor: Colors.red,
    borderRadius: 6,
    elevation: 2,
    marginTop: -2
  },
  nitePriceText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  },
  preciosContent: {
    alignItems: 'flex-end'
  },
  precioText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    textDecorationLine: 'line-through'
  },
  precioBuenavista: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  }
});
