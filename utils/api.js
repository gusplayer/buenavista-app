import axios from "axios";

const BASE_API =
  "http://app.buenavista.com.ec/wsreservaciones/WebServiceReservaciones.asmx/";

class Api {
  async getLogin() {
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresia?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelList;
  }

  async getHotelList() {
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresia?dami=583120`)
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

  async getBeneficios() {
    const benefits = await axios
      .get(`${BASE_API}metodoCuponesDisponibles?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return benefits;
  }

  async getBeneficios() {
    const benefits = await axios
      .get(`${BASE_API}metodoCuponesDisponibles?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return benefits;
  }
}

export default new Api();
