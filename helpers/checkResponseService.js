export default class CheckResponseService {
  /**
   * Method for get a pacients data
   * @param userLoginData
   * @returns { *|Promise.<T> }
   */
  static checkResponse(resultado_OK) {
    if(resultado_OK === true){
      return true
    }
    return false
  }
};
