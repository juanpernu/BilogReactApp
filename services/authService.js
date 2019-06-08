import nookies from 'nookies';
import permisosService from './permisosService';

export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:3000';
    this.login = this.login.bind(this);
  }

  /**
   * Method to login user
   * @param ctx ctx param is only used to set Next JS context
   * @param bilogUser
   * @param user
   * @param password
   * @returns { *|Promise.<T> }
   */
  async login(ctx, bilogUser, user, password) {

    const userLoginData = {
      "Acceso": {
        "WebUser": bilogUser,
        "User": user,
        "Password": password
      }
    }

    return await permisosService.obtenerPermisos(userLoginData)
    .then(res => {
      console.log(res)

      if (res.resultado_Ok === true) {
        this.setLoginData(ctx, bilogUser, user, password);
        // return Promise.resolve(res);
        return res;
      } else {
        return false
      };
    })
  }

  /**
   * Method to check if the user is already loged in
   * @param ctx ctx param is only used to set Next JS context
   * @returns { *|Boolean.<T> }
   */
  loggedIn(ctx){
    // Checks if there is a saved login cookie
    const token = this.getLoginData(ctx)
    console.log(token)
    return token
  }

  /**
   * Method for set a paciens data on cookies
   * @param ctx ctx param is only used to set Next JS context
   * @param bilogUser
   * @param user
   * @param password
   */
  setLoginData(ctx, bilogUser, user, password){
    // Saves user login data to cookies
    nookies.set(ctx, 'WebUser', bilogUser);
    nookies.set(ctx, 'User', user);
    nookies.set(ctx, 'Password', password);
    console.log('cookies setted');
  }

  /**
   * Method for get a pacients data from cookies
   * @param ctx ctx param is only used to set Next JS context
   * @returns { *|String.<T> }
   */
  getLoginData(ctx){
    // Retrieves the user login data from cookies
    const userLoginData = {
      "Acceso": {
        "WebUser": nookies.get(ctx, 'WebUser').WebUser,
        "User": nookies.get(ctx, 'User').User,
        "Password": nookies.get(ctx, 'Password').Password
      }
    }

    return userLoginData
  }

  /**
   * Method to delete all user login data cookies
   * @param ctx ctx param is only used to set Next JS context
   */
  logout(ctx){
    // Clear user login data from cookies
    nookies.destroy(ctx, 'WebUser');
    nookies.destroy(ctx, 'User');
    nookies.destroy(ctx, 'Password');

    console.log('cookies deleted')
  }
}