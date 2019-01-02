import axios from 'axios';

const BASE_API = 'https://api2.komercia.co/';
const CLIENT_SECRET = 'S3kE1jYcd6hFWcu0jIOm3cRFMOnjjmtmtfoYdra1';
const CLIENT_ID = '2';
const ACCESS_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2YTNiZDQwNTMxMjVmMDMyZTE3NmY0NDdhYTYwZjE2OThmNTJkNjQ4MmIyY2NlZGEyMDhiMDg1ODY3N2FhZjdkYzVhYTM5Y2JhNDM5N2Y0In0.eyJhdWQiOiIyIiwianRpIjoiNDZhM2JkNDA1MzEyNWYwMzJlMTc2ZjQ0N2FhNjBmMTY5OGY1MmQ2NDgyYjJjY2VkYTIwOGIwODU4Njc3YWFmN2RjNWFhMzljYmE0Mzk3ZjQiLCJpYXQiOjE1NDMwNzk1NTEsIm5iZiI6MTU0MzA3OTU1MSwiZXhwIjoxNTQ0Mzc1NTUxLCJzdWIiOiIyMDciLCJzY29wZXMiOltdfQ.eXFWrUbMjXobQa-T8QwOKYyjA-3c_po7MRoV95JeUbT3RvUqFrFJJZnQYHlynl3z3UAb_o1cjv8rA7YR67AGS1CF8y04H4mS_PTEfDf7puUoA-ldZFMK6RGJ4gvN0JY6fbkzXJ7TeKQG0SYChp0namRpzBiZdsCUM3Wxtig_9lbCw8TDy7kvwDNnIRHW-aNEIaGVz9tRoaQavQKWeFnLsM53H-BQ1Efn9cc2VgaR94Et62zdrCEFlu89oNj7yOf1InCiqw6m3Vk7LIF_l75ZvVx6Aspicn4AhxT7pnLjnedL0fkep4NH5M17iSfZ-RP1Zc2nLKsLtFGjQDs2vOBmB9wMH4hsfTz_7h2dWYbQvtIoY7UWRRRiwepVuSCtjUO7kCnT19dbZc6s0kNe7Xvp3yrwshjSRUUA9x80a_ikesWDKFg-tIfsGTn2bdQPDr33oV-6s8aIHXO4dbWipeNxWSEhPj0u9sykCjRze5eNzVDYWKJ0h8ucZhGarOrMWVnkUtBSA5ZP1lcGYWhSi739HE8YzbK-Hma4qooFS8k__54yX8MnPaKamE5aPdCVSWS3jfpZRfjsU4e_uEnkfpujg9FaRikN5rFQx8D1gcqLvE3f5mZKHpAaUKxV4EkON4ZRZtNrAjvxEYBCSXcyQCz-E--1MErA8gbMAHMP0ZI87f8';
class Api {
  // TO-DO Login user
  postLogin(email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${BASE_API}oauth/token`,
          {
            grant_type: 'password',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            password: password,
            username: email
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(response => {
          console.warn('Datos correctos');

          resolve(response);
        })
        .catch(error => {
          console.warn('error en los datos');
          reject(error);
        });
    });
  }
  // TO-DO Forget Password

  // TO-DO Create Store

  // TO_DO info store and user

  // TO-DO product list

  async getInventory() {
    const products = await axios
      .get(`${BASE_API}api/admin/productos`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      })
      .then(response => {
        return response.data.data;
      })
      .catch(error => error);
    return products;
  }

  // TO-DO Create new product

  // TO-DO Update product

  // TO-DO Delete Product

  // TO-DO show all sales

  //TO-DO  Update Info Store
}

export default new Api();
