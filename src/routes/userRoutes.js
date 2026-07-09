const express = require ('express');
const router = express.Router ();
let userModel = require ('../models/userDatabase.js')
router.get ('/', (req, res) => {
    userModel.getUsers ((err, data) => {
        const users = data.map (user => ({
            id: user.APIID,
            name: user.APINAME,
            age: user.APIAGE,
            country: user.APICOUNTRY
        }));
        res.status (200).json ({
            success: true,
            msg: 'Get all data',
            data: users
        });
    });
});
router.get ('/:id', (req, res) => {
    let id = req.params.id;
    userModel.getUser (id, (err, data) => {
        if (data && data.length > 0) {
            const user = {
                id: data [0].APIID,
                name: data [0].APINAME,
                age: data [0].APIAGE,
                country: data [0].APICOUNTRY
            };
            res.status (200).json ({
                success: true,  
                msg: 'Get data',
                data: user
            });
        }
        else {
            res.status (404).json ({
                success: false,
                msg: 'Data not found'
            });
        }
    });
}); 
router.post ('/', (req, res) => {
    let data = {
        APIID: null,
        APINAME: req.body.name,
        APIAGE: req.body.age,
        APICOUNTRY: req.body.country
    };
    userModel.insertUser (data, (err, data) => {
        if (data && data.insertId) {
            res.json ({
                success: true,
                msg: 'Save data',
                data: data.insertId
            });
        }
    });
});
router.put ('/:id', (req, res) => {
    let id = req.params.id;
    let data = {
        APINAME: req.body.name,
        APIAGE: req.body.age,
        APICOUNTRY: req.body.country
    };
    userModel.updateUser (id, data, (err, data) => {
        if (data && data.msg) {
            res.json ({
                success: true,
                msg: 'Updated data',
                data: data.updatedId
            });
        }
    });
}); 
router.delete ('/:id', (req, res) => {
    let id = req.params.id;
    userModel.deleteUser (id, (err, data) => {
        if (data && data.msg === 'Deleted' || data.msg === 'Not exists') {
            res.json ({
                success: true,
                msg: 'Data deleted',
                data: data.deletedId
            });
        }
        else {
            res.status (500).json ({
                success: false,
                msg: 'Data not found'
            });
        }
    });
});
module.exports = router;