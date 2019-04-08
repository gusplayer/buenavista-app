import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import HeaderTab from '../src/components/header';
import TabBar from '../src/components/tabBar';
import { Colors, Bold } from '../utils/const';
import { Item, Input, Label, Container, DatePicker, Picker } from 'native-base';
import API from '../utils/api';
import Modal from 'react-native-modal';

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKids: 0,
      selectedAdults: 1,
      selectedHotel: 0,
      selectedCupon: 0,
      selectedRoom: 0,
      chosenDateInicio: new Date(),
      chosenDateFin: new Date(),
      loaderBoton: false,
      hotelList: [],
      hotelRoomsList: [],
      hotelCuponesList: [],
      hotelSelected: '',
      roomSelected: '',
      loading: true,
      enabledRoom: false,
      enabledCupon: false,
      disabledFechaFin: true,
      messageError: false,
      loadingHeader: false,
      isModalVisible: false
    };
    this.setDateInicio = this.setDateInicio.bind(this);
    this.setDateFin = this.setDateFin.bind(this);
  }
  async componentDidMount() {
    const hotelAPI = await API.getHotelList();
    this.setState({
      hotelList: hotelAPI,
      loading: false,
      loadingHeader: false
    });
  }

  modal() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.modalContent}>
        <View
          style={{
            padding: 28,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Image
            source={require('../src/assets/Logo.png')}
            style={{ width: 150, height: 20, marginLeft: -15 }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginBottom: 15,
              marginTop: 20
            }}
          >
            Los datos registrados en la reserva han sido enviados correctamente.
          </Text>
          <Text
            style={styles.linkForgetModal}
            onPress={() => {
              this.setState({ isModalVisible: false });
              navigate('HotelList');
            }}
          >
            <Bold>Continuar</Bold>
          </Text>
        </View>
      </View>
    );
  }

  countryList = () => {
    return this.hotelList.map(x => {
      // return <Picker.Item label={x.Hotel} key={} value={x} />;
      return <Picker.Item label="9" value="9" />;
    });
  };

  async onValueChangeHotel(value) {
    this.setState({
      enabledRoom: false,
      enabledCupon: false,
      loadingHeader: true
    });
    const hotelRoomsAPI = await API.getHabitaciones();
    const hotelCuponesAPI = await API.getCuponesHotel();
    this.setState({
      hotelSelected: value,
      hotelRoomsList: hotelRoomsAPI,
      hotelCuponesList: hotelCuponesAPI,
      enabledRoom: true,
      enabledCupon: true,
      loadingHeader: false,
      messageError: false
    });
  }

  onValueChangeKids(value) {
    this.setState({
      selectedKids: value
    });
  }
  onValueChangeAdults(value) {
    this.setState({
      selectedAdults: value
    });
  }

  onValueChangeCupon(value) {
    this.setState({
      selectedCupon: value
    });
  }

  setDateInicio(newDate) {
    this.setState({ chosenDateInicio: newDate });
  }

  setDateFin(newDate) {
    this.setState({ chosenDateFin: newDate });
  }

  onClickSendBooking = () => {
    if (this.state.enabledCupon == false) {
      this.setState({ messageError: true });
    } else {
      this.setState({ isModalVisible: true });
    }
  };

  render() {
    let myloop = [];
    if (this.state.selectedKids > 0) {
      for (let i = 0; i < this.state.selectedKids; i++) {
        myloop.push(
          <Item style={{ width: '100%', justifyContent: 'space-between' }}>
            <Label style={{ width: '52%' }}>Niño {i + 1}</Label>
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              placeholder="Adultos"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selectedAdults}
              onValueChange={this.onValueChangeAdults.bind(this)}
            >
              <Picker.Item label="0 años" value="0" />
              <Picker.Item label="1 año" value="1" />
              <Picker.Item label="2 años" value="2" />
              <Picker.Item label="3 años" value="3" />
              <Picker.Item label="4 años" value="4" />
              <Picker.Item label="5 años" value="5" />
              <Picker.Item label="6 años" value="6" />
              <Picker.Item label="7 años" value="7" />
              <Picker.Item label="8 años" value="8" />
              <Picker.Item label="9 años" value="9" />
              <Picker.Item label="10 años" value="10" />
              <Picker.Item label="11 años" value="11" />
              <Picker.Item label="12 años" value="12" />
              <Picker.Item label="13 años" value="13" />
            </Picker>
          </Item>
        );
      }
    }
    const leftHeader = { data: false };
    const rigthHeader = { data: false };
    if (this.state.loading) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#f14b5a" />
          <Text>Cargando reserva</Text>
        </View>
      );
    }
    return (
      <Container>
        <HeaderTab
          navigation={this.props.navigation}
          left={leftHeader}
          right={rigthHeader}
        />
        <View style={styles.redSeparator}>
          {this.state.loadingHeader ? (
            <View style={{ flexDirection: 'row' }}>
              <ActivityIndicator
                size="small"
                color="#fff"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.nameHotel}>ACTUALIZANDO INFORMACIÓN</Text>
            </View>
          ) : (
            <Text style={styles.nameHotel}>
              TE AYUDAMOS A ENCONTRAR TU ALOJAMIENTO IDEAL
            </Text>
          )}
        </View>

        <ScrollView style={styles.body}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.form}>
              {/* <Item inlineLabel>
                <Label>Selecciona el país</Label>
                <Input />
              </Item>
              <Item inlineLabel>
                <Label>Selecciona la ciudad o provincia</Label>
                <Input />
              </Item> */}

              <Item inlineLabel>
                <Label style={{ width: '53%' }}>Hotel a reservar</Label>
                <Picker
                  mode="dropdown"
                  style={{ width: undefined }}
                  placeholder="Hotel"
                  placeholderStyle={{ color: '#bfc6ea' }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.hotelSelected}
                  onValueChange={this.onValueChangeHotel.bind(this)}
                >
                  <Picker.Item label="Seleccionar Hotel" value=" " />
                  {this.state.hotelList.map(v => {
                    return <Picker.Item label={v.Hotel} value={v} />;
                  })}
                </Picker>
              </Item>

              <Item inlineLabel>
                <Label style={{ width: '53%' }}>Tipo de habitación</Label>
                <Picker
                  mode="dropdown"
                  enabled={this.state.enabledRoom}
                  style={{ width: undefined }}
                  placeholder="Habitación"
                  placeholderStyle={{ color: '#bfc6ea' }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.roomSelected}
                  onValueChange={this.onValueChangeAdults.bind(this)}
                >
                  {this.state.hotelRoomsList.map(v => {
                    return (
                      <Picker.Item label={v.thNombre} value={v.haCodigo} />
                    );
                  })}
                </Picker>
              </Item>

              <View style={styles.dates}>
                <Item inlineLabel style={{ width: '45%' }}>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={'es'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'default'}
                    placeHolderText="Fecha Inicio"
                    textStyle={{ color: 'green' }}
                    placeHolderTextStyle={{
                      color: '#4c4c4c',
                      marginLeft: -10,
                      paddingLeft: 0
                    }}
                    onDateChange={this.setDateInicio}
                    disabled={false}
                  />
                  {/* <Text>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                  </Text> */}

                  <Input />
                </Item>
                <Item inlineLabel style={{ width: '45%' }}>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={'es'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'default'}
                    placeHolderText="Fecha Fin"
                    textStyle={{ color: 'green' }}
                    placeHolderTextStyle={{
                      color: '#4c4c4c',
                      marginLeft: -10,
                      paddingLeft: 0
                    }}
                    onDateChange={this.setDateFin}
                    disabled={false}
                  />
                  {/* <Text>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                  </Text> */}

                  <Input />
                </Item>
              </View>

              <View picker inlineLabel style={styles.dates}>
                <Item inlineLabel style={{ width: '48%' }}>
                  <Label>Adultos</Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: undefined }}
                    placeholder="Adultos"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedAdults}
                    onValueChange={this.onValueChangeAdults.bind(this)}
                  >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                  </Picker>
                </Item>

                <Item picker inlineLabel style={{ width: '45%' }}>
                  <Label>Niños</Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: undefined }}
                    placeholder="Niños"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedKids}
                    onValueChange={this.onValueChangeKids.bind(this)}
                  >
                    <Picker.Item label="0" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                  </Picker>
                </Item>
              </View>

              {this.state.selectedKids > 0 && (
                <View picker inlineLabel style={styles.kidsTextContainer}>
                  <Text style={styles.kidsText}>
                    ¿Qué edades tienen los niños?
                  </Text>
                </View>
              )}
              <View picker inlineLabel style={styles.ageKids}>
                {myloop}
              </View>

              <View picker inlineLabel style={styles.dates}>
                <Item inlineLabel style={{ width: '100%' }}>
                  <Label style={{ width: '52%' }}>Aplicar cupón</Label>
                  <Picker
                    mode="dropdown"
                    enabled={this.state.enabledCupon}
                    style={{ width: undefined }}
                    placeholder="Niños"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedCupon}
                    onValueChange={this.onValueChangeCupon.bind(this)}
                  >
                    {this.state.hotelCuponesList.map(v => {
                      return <Picker.Item label={v.Cupon} value={v.Cupon} />;
                    })}
                  </Picker>
                </Item>
              </View>
            </View>
          </View>

          {this.state.messageError == true && (
            <View style={styles.errorLogin}>
              <Text style={styles.textError}>
                Faltan datos por ingresar en tu reserva.
              </Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => this.onClickSendBooking()}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonText}>ENVIAR SOLICITUD</Text>
          </TouchableOpacity>
        </ScrollView>

        <TabBar navigation={this.props.navigation} position={2} />
        <Modal isVisible={this.state.isModalVisible}>{this.modal()}</Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white'
  },
  form: {
    padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  dates: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  kidsTextContainer: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  kidsText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500'
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
    fontSize: 12,
    fontWeight: '400'
  },
  buttonLogin: {
    width: 280,
    backgroundColor: Colors.gold,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 15,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '300'
  },
  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ageKids: {
    width: '100%',
    flexWrap: 'wrap'
  },
  errorLogin: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: '100%',
    height: 20,
    borderRadius: 5,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textError: {
    color: '#B1180F',
    fontSize: 14,
    fontWeight: '500'
  },
  modalContent: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalIcon: {
    color: 'gray',
    fontSize: 35,
    marginBottom: 10,
    marginTop: 10
  }
});
