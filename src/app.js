'use strict'
const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
let pathRoutes = require ('./routes/index.js');
let movieRoutes = require ('./routes/movies.js');
let albumRoutes = require ('./routes/album.js');
let port = (process.env.PORT || 3000);
let app = express ();
app
    // Configuracion
    .set ('port', port)
    // Middlewares
    .use (express.urlencoded ({
        extended: false
    }))
    .use (express.json ())
    .use (cors ())
    .use (morgan ('dev'))
    // Rutas
    .use (pathRoutes)
    .use ('/api/movies/', movieRoutes)
    .use ('/api/users/', albumRoutes)
    .listen (port, () => {
        console.clear ();
        console.log ('Server on port ' + port);
    });