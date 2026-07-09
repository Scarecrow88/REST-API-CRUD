// verification message
async function init (request, response) {
    response.writeHead (200, {
        'Content-Type': 'application/json'
    });
    await response.write (JSON.stringify ({
        message: "Hola mundo"
    }));
    response.end ();
}
module.exports = {
    init
};