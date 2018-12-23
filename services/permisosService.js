import axios from 'axios'
import Router from 'next/router'
import config from '../configs'

const restClient = axios.create({
  baseURL: config.baseURL,
  headers: config.headers
});

export default class PermisosService {
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

   /**
   * Method for get a pacients data
   * @param userLoginData
   * @returns { *|Promise.<T> }
   */
  static handlePermisos(permisos) {
    permisos.response.usuario.permisos.map((permiso) => {
      const navigationItemSistema = permiso.idProcesoNavigation.itemSistema
      const navigationOpcion = permiso.idProcesoNavigation.opcion

      if(
        navigationItemSistema === 'Agenda Turnos' &&
        navigationOpcion === 'Agenda Turnos'
      ){
        console.log('tiene agenda permiso')
        Router.push('/agenda')
        return
      }

      // if(
      //   navigationItemSistema === 'Pacientes' &&
      //   navigationOpcion === 'Pacientes'
      // ){
      //   console.log('tiene permiso para pacientes')
      //   Router.push('/pacientes')
      //   return
      // }
    })
    
   }

}