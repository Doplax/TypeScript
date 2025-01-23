var express = require('express'); // Importamos el módulo 'express'
var app = express(); // Creamos una instancia de una aplicación de Express
var port = 3000; // Definimos el puerto en el que el servidor escuchará
// Ruta raíz: Cuando alguien visita la raíz del sitio, responde con "Hello World!"
app.get('/', function (req, res) {
    res.send('Hello World!'); // Enviamos como respuesta "Hello World!"
});
// Ponemos a escuchar el servidor en el puerto definido
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port)); // Mensaje de consola para verificar que el servidor está corriendo
});
