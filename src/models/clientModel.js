let mongoose = require ('mongoose');
let Row = mongoose.Schema;
let url = "mongodb://localhost:27017/User";
mongoose.connect (url)
    .then (() => console.log ('Successful connection'))
    .catch (e => console.log (e));
let clientRow = new Row ({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    }
});
module.exports = mongoose.model ('clients', clientRow);