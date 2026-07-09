const express = require ('express');
const clientModel = require ('../models/clientModel.js');
const router = express.Router ();
router.get ('/', (req, res) => {
    clientModel.find ()
        .then (clientObjects => res.status (200).json ({
            success: true,
            msg: 'Get all data',
            data: clientObjects
        }))
        .catch (error => console.log ("Error al obtener clientes:", error));
});
router.get ('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status (400).json ({
                success: false,
                msg: "Client ID is required"
            });
        }
        await clientModel.findOne ({
            _id: id
        })
        .then (clientObjects => res.status (200).json ({
            success: true,
            msg: 'Get data',
            data: clientObjects
        }))
        .catch (error => console.log (error));
    } 
    catch (error) {
        res.status (500).json ({
            success: false,
            msg : "Error to get client",
            data: error.message
        });
    }
});
router.post ("/add", async (req, res) => {
    try {
        const {name, lastName, age, amount} = req.body;
        if (!name || !lastName || !age || !amount) {
            return res.status (400).json ({
                success: false,
                msg: "All fields are required"
            });
        }
        const client = new clientModel ({name, lastName, age, amount});
        const savedClient = await client.save ();
        res.status (201).json ({
            success: true,
            msg: 'Save data',
            data: savedClient._id
        });
    } 
    catch (error) {
        console.error (error);
        res.status (500).json ({
            success: false,
            msg: "Error saving client",
            data: error.message
        });
    }
});

router.put ('/:id', (req, res) => {
    try {
        const id = req.params.id;
        const {name, lastName, age, amount} = req.body;
        if (!id || !name || !lastName || !age || !amount) {
            return res.status (400).json ({
                success: false,
                msg: "Client ID and all fields are required"
            });
        }
        clientModel.findOneAndUpdate ({
            _id: id
        }, 
        { 
            $set: { 
                name: name, 
                lastName: lastName ,
                age: age,
                amount: amount
            } 
        })
        .then (res.status (201).json ({
            success: true,
            msg: 'Updated data',
            data: id
        }))
        .catch (error => console.log (error));
    } 
    catch (error) {
        res.status (500).json ({
            success: false,
            msg: "Error updating client",
            data: error.message
        });
    }
});
router.delete ('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedClient = await clientModel.findByIdAndDelete (id);
        if (!deletedClient) {
            return res.status (404).json ({ 
                success: false,
                msg: "Data not found"
            });
        }
        res.status (200).json ({ 
            success: true,
            msg: "Data deleted",
            data: deletedClient._id
        });
    } 
    catch (error) {
        console.error ("Error al eliminar cliente:", error);
        res.status (500).json ({
            success: false,
            msg: "Internal server error",
            data: error.message
        });
    }
});
module.exports = router;