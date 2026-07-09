const {bodyParser} = require ('./bodyParser.js');
/* Update data record (It is recommended to send a request in the form 
of a query) e.g. ?id=X */
async function updateTaskHandler (request, response, dat) {
    try {
        let {url} = request;
        let idQuery = url.split ('?') [1];
        let idKey = idQuery.split ('=') [0];
        let idValue = idQuery.split ('=') [1];
        if (idKey === "id") {
            await bodyParser (request);
            const newTask = {
                id: parseInt (idValue),
                ...request.body
            };
            dat [idValue - 1] = newTask;
            response.writeHead (200, {
                'Content-Type': 'application/json'
            });
            await response.write (JSON.stringify (dat));
            response.end ();
        }
        else {
            response.writeHead (200, {
                'Content-Type': 'application/json'
            });
            response.write ('Invalid request query');
            response.end ();
        }
    } 
    catch (err) {
        response.writeHead (400, {
            'Content-Type': 'text/plain'
        });
        response.write ('Invalid body data was provided', err.message);
        response.end ();
    }
}
module.exports = {
    updateTaskHandler
};