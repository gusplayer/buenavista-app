import axios from 'axios';
import { AsyncStorage } from 'react-native';

let USER_TOKEN = null;
const BASE_API =
  'http://app.buenavista.com.ec/wsreservaciones/WebServiceReservaciones.asmx/';

class Api {
  _storeData = async token => {
    try {
      await AsyncStorage.setItem('userToken', token);
    } catch (error) {}
  };
  _storeDataMembership = async membership => {
    try {
      await AsyncStorage.setItem('userMembership', membership);
    } catch (error) {}
  };

  _retrieveData = async () => {
    // try {
    //   let token = await AsyncStorage.getItem('userToken');
    //   USER_TOKEN = token;
    // } catch (error) {
    //   console.warn(error);
    // }
    USER_TOKEN = 583120;
  };
  async getLogin(userID, password) {
    const loginAPI = await axios
      .get(`${BASE_API}metodoLogin?dami=${userID}&clave=${password}`)
      .then(response => {
        this._storeData(userID);
        if (response.data[0].codError == '200') {
          let Auth = true;
          return Auth;
        } else {
          let Auth = false;
          return Auth;
        }
      });
    const Membership = await axios
      .get(`${BASE_API}metodoPerfilUsuario?dami=${userID}`)
      .then(response => {
        this._storeDataMembership(response.data[0].TipoProducto);
        return true;
      })
      .catch(error => error);

    return loginAPI;
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

  async getChangePass(dami, clave) {
    const changePass = await axios
      .get(`${BASE_API}metodoCambioClave?dami=${dami}&clave=${clave}`)
      .then(response => {
        this._storeData(dami);

        let Auth = false;
        if (response.data[0].codError == '200') {
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
        if (response.data[0].codError == '200') {
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
        if (response.data[0].codError == '200') {
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

  async getHabitaciones() {
    await this._retrieveData();
    const hotelRoom = await axios
      .get(
        `${BASE_API}metodoHabitacionesCupones?dami=${USER_TOKEN}&hotel=158&tipo=1`
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
    console.warn('entro al API');

    await this._retrieveData();
    const image = await axios
      .get(
        `${BASE_API}metodoCambiarImagen?dami=${USER_TOKEN}&imagen=${newImage}`
      )
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    console.warn(image);
    return image;
  }
}

export default new Api();
