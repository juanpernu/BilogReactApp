const axios = require('axios');
const qs = require('qs');
import instance from "./configs";

var bodyRequest = 
  {
    "Acceso":
  {
        "WebUser": "demo",
      "User": "demo",
      "Password": "demo"
    },
  "Paciente":
    {
        "IdPaciente": 140
    }
  }

export function obtenerPaciente() {

  instance.post('/ObtenerPaciente', bodyRequest)
  .then((res) => {
    res.send()
  })
  .catch((err) => {
    // Do somthing
  })

}