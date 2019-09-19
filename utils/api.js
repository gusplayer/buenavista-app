import axios from "axios";
import { AsyncStorage, Platform } from "react-native";

// delete GLOBAL.XMLHttpRequest;

let USER_TOKEN = null;
const BASE_API =
  "http://app.buenavista.com.ec/wsreservaciones/WebServiceReservaciones.asmx/";

class Api {
  async GuardarDatosNotificacion(userID) {
    await this._retrieveData();
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: "https://push.buenavista.com.ec/api/set/fcm/",
        data: {
          user_id: userID,
          registration_id: FIREBASE_TOKEN,
          type_so: Platform.OS === "ios" ? "ios" : "android"
          // type_so: "android"
        },
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  listaNotificaciones = async () => {
    await this._retrieveData();
    const data = await axios
      .get(
        `https://push.buenavista.com.ec/api/notification_history/?user_id=${USER_TOKEN}`
      )
      .then(response => {
        return response;
      })
      .catch(error => console.warn(error));
    return data;
  };

  _storeData = async token => {
    try {
      await AsyncStorage.setItem("userToken", token);
    } catch (error) {}
  };

  _retrieveData = async () => {
    try {
      let token = await AsyncStorage.getItem("userToken");
      USER_TOKEN = token;
      let fcmToken = await AsyncStorage.getItem("fcmToken");
      FIREBASE_TOKEN = fcmToken;
    } catch (error) {}
    //USER_TOKEN = 580885;
  };

  _retrieveDataMembership = async () => {
    await this._retrieveData();
    const membresia = await axios
      .get(`${BASE_API}metodoPerfilUsuario?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data[0].TipoProducto;
      })
      .catch(error => console.warn(error));
    return membresia;
  };

  async getLogin(userID, password) {
    const loginAPI = await axios
      .get(`${BASE_API}metodoLogin?dami=${userID}&clave=${password}`)
      .then(response => {
        console.log("response");
        this._storeData(userID);
        if (response.data[0].codError == "200") {
          this.GuardarDatosNotificacion(userID);
          let Auth = true;
          return Auth;
        } else {
          let Auth = false;
          return Auth;
        }
      })
      .catch(error => console.warn(error));
    return loginAPI;
  }

  async getForgetPass(dami) {
    const passResponse = await axios
      .get(`${BASE_API}metodoOvidoClave?dami=${dami}`)
      .then(response => {
        let Auth = false;
        if (response.data[0].codError == "200") {
          let Auth = true;
          return Auth;
        } else {
          let Auth = false;
          return Auth;
        }
      })
      .catch(error => error);
    return passResponse;
  }

  async getChangePass(dami, clave) {
    const changePass = await axios
      .get(`${BASE_API}metodoCambioClave?dami=${dami}&clave=${clave}`)
      .then(response => {
        this._storeData(dami);
        let Auth = false;
        if (response.data[0].codError == "200") {
          let Auth = true;
          return Auth;
        } else {
          let Auth = false;
          return Auth;
        }
      })
      .catch(error => error);
    return changePass;
  }

  async getRegister(dami) {
    const registroAPI = await axios
      .get(`${BASE_API}metodoRegistrate?dami=${dami}`)
      .then(response => {
        let Auth = false;
        if (response.data[0].codError == "200") {
          let Auth = true;
          return Auth;
        } else {
          let Auth = false;
          return Auth;
        }
      });
    return registroAPI;
  }

  //////////////////////// With Auth /////////////////////

  //Cambio de clave cuando esta Auth
  async getChangePassAuth(clave) {
    await this._retrieveData();
    const changePass = await axios
      .get(`${BASE_API}metodoCambioClave?dami=${USER_TOKEN}&clave=${clave}`)
      .then(response => {
        let Auth = false;
        if (response.data[0].codError == "200") {
          let Auth = true;
          return Auth;
        } else {
          let Auth = false;
          return Auth;
        }
      })
      .catch(error => console.warn(error));
    return changePass;
  }

  async getCountries() {
    await this._retrieveData();

    const countries = await axios
      .get(
        // `${BASE_API}metodoUbicacion?pais=${emptyData}&provincia=${emptyData}&ciudad=${emptyData}&tipo=1`
        `${BASE_API}metodoListaPaises`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return countries;
  }

  async getCities(idPais) {
    await this._retrieveData();

    const cities = await axios
      .get(
        // `${BASE_API}metodoUbicacion?pais=${emptyData}&provincia=${emptyData}&ciudad=${emptyData}&tipo=1`
        `${BASE_API}metodoUbicacion?pais=${idPais}`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return cities;
  }

  async getHotelList() {
    await this._retrieveData();
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresiaCupon?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelList;
  }

  async getHabitaciones(hotel) {
    await this._retrieveData();
    const hotelRoom = await axios
      .get(
        `${BASE_API}metodoHabitacionesCupones?dami=${USER_TOKEN}&hotel=${hotel}&tipo=1`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelRoom;
  }

  async getCuponesHotel(hotel) {
    await this._retrieveData();
    const hotelCupones = await axios
      .get(
        `${BASE_API}metodoHabitacionesCupones?dami=${USER_TOKEN}&hotel=${hotel}&tipo=2`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelCupones;
  }

  async getCuponesDisponiblesHotel(hotel) {
    await this._retrieveData();
    const hotelCupones = await axios
      .get(
        `${BASE_API}metodoCuponesDisponiblesHotel?dami=${USER_TOKEN}&hotel=${hotel}`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelCupones;
  }

  async getProfile() {
    await this._retrieveData();
    const profile = await axios
      .get(`${BASE_API}metodoPerfilUsuario?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return profile;
  }

  async getTerms() {
    await this._retrieveData();
    const terms = await axios
      .get(`${BASE_API}metodoTerminosCondiciones`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return terms;
  }

  async getBenefits() {
    await this._retrieveData();
    const benefits = await axios
      .get(`${BASE_API}metodoBeneficiosMembresia?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return benefits;
  }
  async getCuponAvalible() {
    await this._retrieveData();
    const cupons = await axios
      .get(`${BASE_API}metodoCuponesDisponibles?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return cupons;
  }
  async getCuponUsed() {
    await this._retrieveData();
    const cupons = await axios
      .get(`${BASE_API}metodoCuponesUtilizados?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return cupons;
  }
  async getCuponMembership() {
    await this._retrieveData();
    const cupons = await axios
      .get(`${BASE_API}metodoCuponesMembresia?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return cupons;
  }
  async getImageProfile() {
    await this._retrieveData();
    const image = await axios
      .get(`${BASE_API}metodoMostrarImagen?dami=${USER_TOKEN}`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return image;
  }

  async updateImageProfile(newImage) {
    console.warn(newImage);
    await this._retrieveData();
    const respuesta = await axios
      .get(
        `${BASE_API}metodoCambiarImagen?dami=${USER_TOKEN}&imagen=${newImage}`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);

    return respuesta;
  }

  async generarReserva(
    pais,
    ciudad,
    hotel,
    tipoHabitacion,
    fechaInicio,
    fechaFin,
    adultos,
    ninos,
    edadNino1,
    edadNino2,
    edadNino3,
    edadNino4,
    cupon
  ) {
    await this._retrieveData();
    const respuesta = await axios
      .get(
        `${BASE_API}metodoGeneraResera?dami=${USER_TOKEN}&pais=${pais}&ciudad=${ciudad}&hotel=${hotel}&tipoHabitacion=${tipoHabitacion}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&noAdultos=${adultos}&noNiños=${ninos}&edadNino1=${edadNino1}&edadNino2=${edadNino2}&edadNino3=${edadNino3}&edadNino4=${edadNino4}&cupon=${cupon}&cantidad=1`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);

    return respuesta;
  }
}

export default new Api();
