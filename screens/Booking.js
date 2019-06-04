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
import Moment from 'moment';

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKids: 0,
      selectedKidAge1: 0,
      selectedKidAge2: 0,
      selectedKidAge3: 0,
      selectedKidAge4: 0,
      selectedKidAge5: 0,
      edades: ['0', '0', '0', '0'],
      selectedAdults: 1,
      selectedHotel: 0,
      selectedCupon: 0,
      selectedRoom: 0,
      messageMissingDatesText: '',
      chosenDateInicio: Date.now(),
      chosenDateFin: '',
      loaderBoton: false,
      hotelList: [],
      hotelRoomsList: [],
      hotelCuponesList: [],
      hotelSelected: '',
      // roomSelected: '',
      loading: true,
      enabledRoom: false,
      enabledCupon: false,
      messageError: false,
      messageMissingDates: false,
      messageMissingRoom: false,
      loadingHeader: false,
      isModalVisible: false,
      idHotelParams: '',
      disabledFechaFin: true,
      textoFechaFin: '-',
      loadingButton: false
    };
    this.setDateInicio = this.setDateInicio.bind(this);
    this.setDateFin = this.setDateFin.bind(this);
  }
  async componentDidMount() {
    if (this.props.navigation.state.params) {
      let idHotel = await this.props.navigation.state.params.hotel;
      this.setState({
        idHotelParams: idHotel
      });
      this.onValueChangeHotel(idHotel);
    }
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

  // countryList = () => {
  //   return this.hotelList.map(x => {
  //     // return <Picker.Item label={x.Hotel} key={} value={x} />;
  //     return <Picker.Item label="9" value="9" />;
  //   });
  // };

  onValueChangeHotel = async value => {
    this.setState({
      enabledRoom: false,
      enabledCupon: false,
      loadingHeader: true
    });
    const hotelRoomsAPI = await API.getHabitaciones(value.id_Hotel);
    const hotelCuponesAPI = await API.getCuponesDisponiblesHotel(
      value.id_Hotel
    );

    this.setState({
      hotelSelected: value,
      hotelRoomsList: hotelRoomsAPI,
      hotelCuponesList: hotelCuponesAPI,
      enabledRoom: true,
      enabledCupon: true,
      loadingHeader: false,
      messageError: false,
      selectedCupon: hotelCuponesAPI[0].id_Cupon
    });
  };

  onValueChangeKids(value) {
    this.setState({
      selectedKids: value
    });
  }
  onValueChangeKidAge(value, position) {
    if (value == 0) {
      this.state.edades[value] = position;
      this.setState({
        selectedKidAge1: position
      });
    }
    if (value == 1) {
      this.state.edades[value] = position;
      this.setState({
        selectedKidAge2: position
      });
    }
    if (value == 2) {
      this.state.edades[value] = position;
      this.setState({
        selectedKidAge3: position
      });
    }
    if (value == 3) {
      this.state.edades[value] = position;
      this.setState({
        selectedKidAge4: position
      });
    }
    if (value == 4) {
      this.state.edades[value] = position;
      this.setState({
        selectedKidAge5: position
      });
    }
  }

  onValueChangeAdults(value) {
    this.setState({
      selectedAdults: value
    });
  }
  onValueChangeRoom(value) {
    this.setState({
      selectedRoom: value,
      messageMissingDates: false
    });
  }
  onValueChangeCupon(value) {
    this.setState({
      selectedCupon: value
    });
  }
  setDateInicio(newDate) {
    this.setState({
      chosenDateInicio: newDate,
      textoFechaFin: 'Fecha Salida',
      disabledFechaFin: false
    });
  }

  setDateFin(newDate) {
    this.setState({
      chosenDateFin: newDate,
      messageMissingDates: false
    });
  }

  onClickSendBooking = async () => {
    this.setState({ loaderButton: true });
    let fechaInicio = Moment(this.state.chosenDateInicio).format('L');
    let fechaFin = Moment(this.state.chosenDateFin).format('L');

    if (this.state.enabledCupon == false) {
      //falta seleccionar el hotel
      this.setState({ messageError: true });
      this.setState({ loaderButton: false });
    } else {
      if (this.state.selectedRoom == 0) {
        this.setState({ messageMissingDates: true });
        this.setState({
          messageMissingDatesText: 'Por favor selecciona una habitación'
        });
        this.setState({ loaderButton: false });
      } else if (
        this.state.chosenDateInicio == '' ||
        this.state.chosenDateFin == ''
      ) {
        //Faltan las fechas

        this.setState({ messageMissingDates: true });
        this.setState({
          messageMissingDatesText: 'Por favor selecciona las fechas'
        });
        this.setState({ loaderButton: false });
      } else if (this.state.selectedCupon == 0) {
        this.setState({ messageMissingDates: true });
        this.setState({
          messageMissingDatesText: 'Por favor selecciona un cupón'
        });
        this.setState({ loaderButton: false });
      } else {
        //Todos los datos estan bien
        // await API.generarReserva(dami, pais, provincia);
        let responseAPI = await API.generarReserva(
          this.state.hotelSelected.id_Pais,
          this.state.hotelSelected.id_Ciudad,
          this.state.hotelSelected.id_Hotel,
          this.state.selectedRoom,
          fechaInicio,
          fechaFin,
          this.state.selectedAdults,
          this.state.selectedKids,
          this.state.selectedKidAge1,
          this.state.selectedKidAge2,
          this.state.selectedKidAge3,
          this.state.selectedKidAge4,
          this.state.selectedCupon
        );
        this.setState({ isModalVisible: true, loadingButton: false });
      }
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
              placeholder="Niño"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              //selectedValue={this.state.selectedKidAge + i}
              selectedValue={this.state.edades[i]}
              onValueChange={this.onValueChangeKidAge.bind(this, i)}
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
              {this.state.roomSelected}
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

              {this.state.idHotelParams == '' ? (
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
              ) : (
                <Item inlineLabel>
                  <Label style={{ width: '100%' }}>
                    {this.state.idHotelParams.Hotel}
                  </Label>
                </Item>
              )}

              {this.state.enabledCupon == false ? (
                <View />
              ) : (
                <Item inlineLabel>
                  <Label style={{ width: '53%' }}>Tipo de habitación</Label>
                  <Picker
                    mode="dropdown"
                    enabled={this.state.enabledRoom}
                    style={{ width: undefined }}
                    placeholder="Habitación"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedRoom}
                    onValueChange={this.onValueChangeRoom.bind(this)}
                  >
                    <Picker.Item label="Seleccionar Habitación" value=" " />

                    {this.state.hotelRoomsList.map(v => {
                      return (
                        <Picker.Item label={v.thNombre} value={v.haCodigo} />
                      );
                    })}
                  </Picker>
                </Item>
              )}

              {this.state.selectedRoom == '' ? (
                <View />
              ) : (
                <View style={styles.dates}>
                  <Item inlineLabel style={{ width: '45%' }}>
                    <DatePicker
                      defaultDate={Date.now()}
                      locale={'es'}
                      minimumDate={Date.now()}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={'fade'}
                      androidMode={'default'}
                      placeHolderText="Fecha Ingreso"
                      textStyle={{ color: 'green' }}
                      placeHolderTextStyle={{
                        color: '#4c4c4c',
                        marginLeft: -10,
                        paddingLeft: 0
                      }}
                      onDateChange={this.setDateInicio}
                      disabled={false}
                    />
                  </Item>
                  <Item inlineLabel style={{ width: '45%' }}>
                    <DatePicker
                      defaultDate={Date.now() + 172800000}
                      locale={'es'}
                      minimumDate={this.state.chosenDateInicio}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={'fade'}
                      androidMode={'default'}
                      placeHolderText={this.state.textoFechaFin}
                      textStyle={{ color: 'green' }}
                      placeHolderTextStyle={{
                        color: '#4c4c4c',
                        marginLeft: -10,
                        paddingLeft: 0
                      }}
                      onDateChange={this.setDateFin}
                      disabled={false}
                    />
                  </Item>
                </View>
              )}

              {this.state.chosenDateFin == '' ? (
                <View />
              ) : (
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
                    </Picker>
                  </Item>
                </View>
              )}

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

              {this.state.chosenDateFin == '' ? (
                <View />
              ) : (
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
                      <Picker.Item label="Seleccionar Cupón" value=" " />

                      {this.state.hotelCuponesList.map(v => {
                        return (
                          <Picker.Item label={v.Cupon} value={v.id_Cupon} />
                        );
                      })}
                    </Picker>
                  </Item>
                </View>
              )}
            </View>
          </View>

          {this.state.messageError == true && (
            <View style={styles.errorLogin}>
              <Text style={styles.textError}>Debes seleccionar un hotel.</Text>
            </View>
          )}

          {this.state.messageMissingDates == true && (
            <View style={styles.errorLogin}>
              <Text style={styles.textError}>
                {this.state.messageMissingDatesText}
              </Text>
            </View>
          )}
          {this.state.loaderButton ? (
            <ActivityIndicator size="large" color="#808080" />
          ) : (
            <TouchableOpacity
              onPress={() => this.onClickSendBooking()}
              style={styles.buttonLogin}
            >
              <Text style={styles.buttonText}>ENVIAR SOLICITUD</Text>
            </TouchableOpacity>
          )}
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
