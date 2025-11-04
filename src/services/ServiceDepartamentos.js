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

  findDepartamento(id) {
    return new Promise(function (resolve) {
      var request = "api/departamentos/" + id;
      var url =Global.apiDepartamentos + request;
      let departamento = null;
      axios.get(url).then((response) => {
        console.log("Find departamento");
        departamento = response.data;
        resolve(departamento)
      })
    })
  }

  updateDepartamento(departamento) {
    return new Promise(function(resolve) {
        let request = "api/departamentos";
        let url = Global.apiDepartamentos + request;
        axios.put(url, departamento).then(response => {
            resolve(response)
        })
    })
  }

  deleteDepartamento(id) {
    return new Promise(function(resolve) {
        let request = "api/departamentos/" + id;
        let url = Global.apiDepartamentos + request;
        axios.delete(url).then(response => {
            resolve(response)
        })
    })
  }
}
