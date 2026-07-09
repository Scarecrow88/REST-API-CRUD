const express = require ("express");
const morgan = require ('morgan');
const cors = require ('cors');
let indexRoutes = require ('./routes/index.js');
let clientRoutes = require ('./routes/clientRoutes.js');
const app = express ();
let port = (process.env.PORT || 3000);
app
    .use (express.urlencoded ({
        extended: true
    }))
    .use (express.json ())
    .use (cors ())
    .use (morgan ('dev'))
    // Rutas
    .use ('/', indexRoutes)
    .use ('/api/clients/', clientRoutes)
    // Configuracion
    .set ('port', port)
    .listen (port, () => {
        console.clear ();
        console.log ('Server on port ' + port);
    });