const {bodyParser} = require ('./bodyParser.js');
// Insert data record
async function createTaskHandler (request, response, dat) {
    try {
        await bodyParser (request);
        let currentId = dat.length + 1;
        const newTask = {
            id: currentId ++,
            ...request.body
        };
        dat.push (newTask);
        response.writeHead (200, {
            'Content-Type': 'application/json'
        });
        response.write (JSON.stringify (dat));
        response.end ();
    } 
    catch (error) {
        response.writeHead (500, {
            'Content-Type': 'text/plain'
        });
        response.write ('Invalid Data', error);
        response.end ();
    }
}
module.exports = {
    createTaskHandler
};