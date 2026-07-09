const {getTaskHandler} = require ('./read.js');
/* Delete data record (It is recommended to send a request in the form 
of a query) e.g. ?id=X */
async function deleteTaskHandler (request, response, dat) {
    let {url} = request;
    let idQuery = url.split ('?') [1];
    let idKey = idQuery.split ('=') [0];
    let idValue = idQuery.split ('=') [1];
    if (idKey === "id") {
        dat.splice (idValue - 1, 1);
        response.writeHead (200, {
            'Content-Type': 'application/json'
        });
        response.write (JSON.stringify (dat));
        response.end ();
    }
    else {
        response.writeHead (400, {
            'Content-Type': 'text/plain'
        });
        response.write ('Invalid request query');
        response.end ();
    }
}
module.exports = {
    deleteTaskHandler
};