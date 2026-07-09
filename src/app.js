'use strict'
const http = require ('http');
const {init} = require ('./lib/init.js');
const {createTaskHandler} = require ('./lib/create.js');
const {getTaskHandler} = require ('./lib/read.js');
const {updateTaskHandler} = require ('./lib/update.js');
const {deleteTaskHandler} = require ('./lib/delete.js');
const port = 3000;
const database = require ('./database/database.json');
// Create the server
const server = http.createServer ((req, res) => {
    const {url, method} = req;
    logger (req, res);
    switch (method) {
        case "GET":
            if (url === '/') {
                init (req, res)
            }
            if (url === '/api/tasks') {
                getTaskHandler (req, res, database);
            }
            break;
        case "POST":
            if (url === '/api/tasks') {
                createTaskHandler (req, res, database);
            }
            break;
        case "PUT":
            if (url.startsWith ('/api/tasks') && url.includes ('?id=')) {
                updateTaskHandler (req, res, database);
            } 
            else {
                res.writeHead (400, { 
                    'Content-Type': 
                    'text/plain' 
                });
                res.end ('Falta o formato incorrecto del parámetro ?id=');
            }
            break;
        case "DELETE":
            if (url.startsWith ('/api/tasks') && url.includes ('?id=')) {
                deleteTaskHandler (req, res, database);
            } 
            else {
                res.writeHead (400, { 
                    'Content-Type': 'text/plain'
                });
                res.end ('Falta o formato incorrecto del parámetro ?id=');
            }
            break;
    }
});
function logger (req, res) {
    const {method, url} = req;
    // Intercept the moment the response ends to capture the status code
    const originalEnd = res.end;
    res.end = function (...args) {
        // Show method, path and status code
        console.log (`[${new Date ().toISOString ()}] ${method} ${url} -> ${res.statusCode}`);
        // Call the original end
        originalEnd.apply (res, args);
    };
}
// Start the server
function startServer () {
    server.listen (port);
    console.clear ();
    console.log ('Server on port', port);
}
startServer ();