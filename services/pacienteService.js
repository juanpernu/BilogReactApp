import axios from 'axios';
import config from '../configs'

const restClient = axios.create({
  baseURL: config.baseURL,
  headers: config.headers
});

export default class PacienteService {
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