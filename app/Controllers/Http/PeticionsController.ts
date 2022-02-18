
const axios = require('axios')

export default class PeticionsController {
  public async index() {
    console.log('Recibido: Servidor 1')
    const mnsj = "Recibido por el Servidor 1"
    var req;
     await axios.get('http://localhost:3333/peticion').then(response => {
      console.log(response.data);
       req = response.data;
    })
    .catch(error => {
      console.log(error);
      req = error;
    });
    return {servidor1:mnsj, servidor2:req};
  }
}
