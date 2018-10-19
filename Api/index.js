const qs = require('qs');
const axios = require('axios');
import Config from "./configs";

export function obtenerPermisos(bodyRequest) {

  axios.post(`${Config.baseBilogURL}/ObtenerPermisos`, qs.stringify(bodyRequest), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
  .then((res) => {
    // Do somthing
    let data = res.data.split('>');
    data = data[2].replace(/([</]+)\w+/, '');
    data = JSON.parse(data)
    console.log(data.response);
  })
  .catch((err) => {
    // Do somthing
  })

}