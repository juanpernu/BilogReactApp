const axios = require('axios');

var instance = axios.create({
  baseURL: 'http://170.78.75.70',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
});

export default instance;