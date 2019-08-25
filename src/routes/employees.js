const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (errors, rows, fields) => {
        if (errors) {
            console.log(error)
            return
        }

        res.json(rows);
    });
});

module.exports = router;
