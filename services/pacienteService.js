import axios from 'axios';
import config from '../configs'
import CheckResponseService from '../helpers/checkResponseService'

const restClient = axios.create({
  baseURL: config.baseURL,
  headers: config.headers
});

class PacienteService {
  /**
   * Method for get a all profesional's pacients
   * @param userLoginData
   * @returns { *|Promise.<T> }
   */
  static searchPacientes(userLoginData) {
    return restClient
     .post('/ObtenerPacientes', userLoginData)
     .then(response => {
        if(CheckResponseService.checkResponse(response.data.resultado_Ok)){
          return response.data
        } else {
          console.log(('Error en searchPacientes ', response.data.mensajeError))
          return;
        }
      })
     .catch((e) => {
       return e;
     })
  }

  /**
   * Method for get a pacients data
   * @param userLoginData
   * @returns { *|Promise.<T> }
   */
  static selectPaciente(userLoginData){
    return restClient
     .post('/ObtenerPaciente', userLoginData)
     .then(response => {
        if(CheckResponseService.checkResponse(response.data.resultado_Ok)){
          return response.data
        } else {
          console.log(('Error en selectPaciente ', response.data.mensajeError))
          return;
        }
      })
     .catch((e) => {
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

export default PacienteService;