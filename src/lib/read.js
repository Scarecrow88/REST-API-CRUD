// Get all data
async function getTaskHandler (request, response, dat) {
    response.writeHead (200, {
        'Content-Type': 'application/json'
    });
    await response.write (JSON.stringify (dat));
    response.end ();
}
module.exports = {
    getTaskHandler
};