'use strict'
const {Router} = require ('express');
const router = Router ();
const movies = require ('../database/database.json');
// READ - GET
router.get ('/', (req, res) => {
    res.json (movies);
});
// CREATE - POST
router.post ('/', (req, res) => {
    const {name, genre, year} = req.body;
    if (name, genre, year) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push (newMovie);
        res.json ({
            message: 'Movie Added',
            movie: newMovie
        });
    }
    else {
        console.log ('Wrong Request');
        res.json ({
            error: 'There was an error.'
        });
    }
});
// UPDATE - PUT
router.put ('/:id', (req, res) => {
    const {id} = req.params;
    const {name, genre, year} = req.body;
    if (name && genre && year) {
        let updatedMovie = null;
        for (let i = 0; i < movies.length; i++) {
            if (movies [i].id == id) {
                movies [i].name = name;
                movies [i].genre = genre;
                movies [i].year = year;
                updatedMovie = movies [i];
                break;
            }
        }
        if (updatedMovie) {
            res.json ({
                message: 'Movie updated',
                movie: updatedMovie
            });
        } 
        else {
            res.status (404).json ({ 
                error: 'Movie not found' 
            });
        }
    } 
    else {
        res.status (400).json ({
            error: 'Missing fields'
        });
    }
});
// DELETE - DELETE
router.delete ('/:id', (req, res) => {
    const {id} = req.params;
    const movie = movies.find (m => m.id == id);
    if (!movie) {
        return res.status (404).json ({ 
            error: 'Movie not found' 
        });
    }
    res.json ({
        message: 'Movie deleted',
        movie
    });
});

module.exports = router;