import axios from 'axios'
import Router from 'next/router'

const restClient = axios.create({
  baseURL: 'http://170.78.75.70',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
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
    permisos.response.usuario.listaPermisos.map((permiso) => {
      const navigationItemSistema = permiso.idProcesoNavigation.itemSistema
      const navigationOpcion = permiso.idProcesoNavigation.opcion

      if(
        navigationItemSistema === 'Agenda Turnos' &&
        navigationOpcion === 'Agenda Turnos') {
          console.log('tiene agenda permiso')
          return Router.push('/agenda')
        } else if(
          navigationItemSistema === 'Pacientes' &&
          navigationOpcion === 'Pacientes'
        ) {
          console.log('tiene permiso para pacientes')
        }
    })
    
   }

}