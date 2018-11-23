const qs = require('qs');
import Instance from "./configs";

export function obtenerPermisos(bodyRequest) {

  Instance.post(`${Instance.baseURL}/ObtenerPermisos`, qs.stringify(bodyRequest), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
  .then((res) => {
    // Use Fast-xml-parser here
    let data = res.data.split('>');
    data = data[2].replace(/([</]+)\w+/, '');
    data = JSON.parse(data)
    console.log(data.response);
  })
  .catch((err) => {
    // Do somthing
  })

}

export function testInstance() {

  Instance.get(`http://170.78.75.70/`)
  .then((res) => {
    // Use Fast-xml-parser here
    let data = res.data;
    console.log(data);
  })
  .catch((err) => {
    // Do somthing
  })

}