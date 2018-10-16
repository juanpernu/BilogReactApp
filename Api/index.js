import axios from 'axios';
import Config from "./configs";

export function obtenerPermisos(logInData) {
  // Send a POST request
  axios({
    method: 'POST',
    url: `${Config.baseBilogURL}/ObtenerPermisos`,
    data: logInData,
    params: {
      "input": logInData,
    },
    headers: Config.headers,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}