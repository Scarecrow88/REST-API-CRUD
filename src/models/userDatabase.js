'use strict'
const mysql = require ('mysql');
let userModel = [];
let connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Halloween_88',
    database: 'APICRUD'
});
userModel.getUsers = (call) => {
    if (connection) {
        connection.query ('SELECT * FROM APIUSER', (err, rows) => {
            if (err) {
                throw err;
            }
            else {
                call (null, rows);
            }
        });
    }
}
userModel.getUser = (id, call) => {
    if (connection) {
        connection.query ('SELECT * FROM APIUSER WHERE APIID = ?', id, (err, row) => {
            if (err) {
                throw err;
            }
            else {
                call (null, row);
            }
        });
    }
}
userModel.insertUser = (dat, call) => {
    if (connection) {
        connection.query ("INSERT INTO APIUSER SET ?", [dat], (err, res) => {
            if (err) {
                throw err;
            }
            else {
                call (null, {
                    insertId: res.insertId
                });
            }
        });
    }
}
userModel.updateUser = (id, dat, call) => {
    if (connection) {
        connection.query ("UPDATE APIUSER SET ? WHERE APIID = ?", [dat, id], (err, res) => {
            if (err) {
                throw err
            }
            else {
                call (null, {
                    msg: 'success',
                    updatedId: id
                });
            }
        });
    }
}
userModel.deleteUser = (id, call) => {
    if (connection) {
        connection.query ('SELECT * FROM APIUSER WHERE APIID = ?', id, (err, row) => {
            if (row) {
                connection.query ('DELETE FROM APIUSER WHERE APIID = ?', id , (err, res) => {
                    if (err) {
                        throw err;
                    }
                    else {
                        call (null, {
                            msg: 'Deleted',
                            deletedId: id
                        });
                    }
                })
            }
            else {
                call (null, {
                    msg: 'Not exists'
                });
            }
        });
    }
}
module.exports = userModel;