const axios = require('axios');
const restClient = axios.create({
  baseURL: 'http://170.78.75.70',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
});

class PermisosService {
  /**
   * Method for get a pacients data
   * @param userLoginData
   * @returns { *|Promise.<T> }
   */
   static obtenerPermisos(userLoginData) {
     return restClient
      .post('/ObtenerPermisos', userLoginData)
      .then(response => { return response.data })
      .catch((e) => {
        console.log(('Error en ObtenerPermisos ', e))
        return e;
      })
   }

}

module.exports = PermisosService;