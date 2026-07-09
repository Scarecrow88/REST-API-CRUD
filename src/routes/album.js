'use strict';
const {Router} = require ('express');
const axios = require ('axios');
const router = Router ();
router.get ('/', async (req, res) => {
    try {
        const response = await axios.get ('https://jsonplaceholder.typicode.com/users');
        const albums = response.data;
        res.json (albums);
    } 
    catch (error) {
        console.error ('Error fetching albums:', error.message);
        res.status (500).json ({ 
            error: 'Error fetching albums' 
        });
    }
});
module.exports = router;