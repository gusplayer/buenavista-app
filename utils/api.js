import axios from "axios";

const BASE_API =
  "http://app.buenavista.com.ec/wsreservaciones/WebServiceReservaciones.asmx/";

class Api {
  // http://186.4.242.81/wsreservaciones
  //http://186.4.242.81/wsreservaciones/WebServiceReservaciones.asmx/metodoLogin?dami=string&clave=string
  // TO-DO Login user
  postLogin(email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${BASE_API}oauth/token`,
          {
            grant_type: "password",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            password: password,
            username: email
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.warn("Datos correctos");

          resolve(response);
        })
        .catch(error => {
          console.warn("error en los datos");
          reject(error);
        });
    });
  }
  // TO-DO Forget Password

  // TO-DO Create Store

  // TO_DO info store and user

  // TO-DO product list

  async getHotelList() {
    const hotelList = await axios
      .get(`${BASE_API}metodoHotelMembresia?dami=583120`)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return hotelList;
  }

  // TO-DO Create new product

  // TO-DO Update product

  // TO-DO Delete Product

  // TO-DO show all sales

  //TO-DO  Update Info Store
}

export default new Api();
