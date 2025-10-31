import axios from "axios";
import Global from "@/Global";
export default class ServiceDepartamentos {
  getDepartamentos() {
    return new Promise(function (resolve) {
      var request = "api/departamentos";
      var url = Global.apiDepartamentos + request;
      axios.get(url).then((response) => {
        console.log("Leyendo departamentos");
        resolve(response.data);
      });
    });
  }

  insertarDepartamento(departamento) {
    return new Promise(function(resolve) {
        let request = "api/departamentos";
        let url = Global.apiDepartamentos + request;
        axios.post(url, departamento).then(response => {
            resolve(response)
        })
    })
  }
}
