const http = require('http')

http.createServer(router).listen(3000);

function router (req,res) {
  console.log('nueva petición');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, mundo')
      res.end()
      break;
  
    default:
      res.write('Error 404, no encontrado')
      break;
  }

/*   //Escribir una respuesta al usuario
  res.write('Hola, usando HTTP de NODE')

  res.end(); */
}


console.log('Escuchando http en el puerto 3000');
