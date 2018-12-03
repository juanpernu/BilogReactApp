const axios = require('axios');
const restClient = axios.create({
  baseURL: 'http://170.78.75.70',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
});

class PacienteService {
  /**
   * Method for get a pacients data
   * @param userLoginData
   * @returns { *|Promise.<T> }
   */
  static searchPacientes(userLoginData) {
    return restClient
     .post('/ObtenerPacientes', userLoginData)
     .then(response => { return response.data })
     .catch((e) => {
       console.log(('Error en ObtenerPaciente ', e))
       return e;
     })
  }

  /**
   * Method for get a pacients data
   * @param userLoginData
   * @returns { *|Promise.<T> }
   */
   static obtenerPaciente(userLoginData) {
     return restClient
      .post('/ObtenerPaciente', userLoginData)
      .then(response => { return response.data })
      .catch((e) => {
        console.log(('Error en ObtenerPaciente ', e))
        return e;
      })
   }

}

module.exports = PacienteService;