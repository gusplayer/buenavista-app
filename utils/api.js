import axios from "axios";
import { AsyncStorage } from "react-native";

const BASE_API =
  "http://app.buenavista.com.ec/wsreservaciones/WebServiceReservaciones.asmx/";

class Api {
  _storeData = async token => {
    try {
      await AsyncStorage.setItem("userToken", token);
    } catch (error) {}
  };

  _retrieveData = async () => {
    let token = "";
    try {
      token = await AsyncStorage.getItem("userToken");
      if (token !== null) {
        ACCESS_TOKEN = token;
      }
    } catch (error) {
      console.warn("Async de token dañado");
    }
  };
  async getLogin() {
    const hotelList = await axios
      .get(`${BASE_API}metodoLogin?dami=583120&clave=112233`)
      .then(response => {
        return response.data;
        this._storeData(response.data.access_token);
      })
      .catch(error => error);
    return hotelList;
  }

  async getForgetPass() {
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresia?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelList;
  }

  async getChangePass() {
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresia?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelList;
  }

  async getRegister() {
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresia?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelList;
  }

  //////////////////////// With Auth /////////////////////

  async getHotelList() {
    await this._retrieveData();
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresiaCupon?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelList;
  }

  async getProfile() {
    const profile = await axios
      .get(`${BASE_API}metodoPerfilUsuario?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return profile;
  }

  async getTerms() {
    const terms = await axios
      .get(`${BASE_API}metodoTerminosCondiciones`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return terms;
  }

  async getBenefits() {
    const benefits = await axios
      .get(`${BASE_API}metodoBeneficiosMembresia?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return benefits;
  }
}

export default new Api();
