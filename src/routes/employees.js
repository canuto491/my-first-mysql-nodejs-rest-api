const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, resp) => {
    console.log('get all => employee');

    mysqlConnection.query('SELECT * FROM employees', (errors, rows, fields) => {
        if (errors) {
            console.log(error);
            return
        }

        resp.json(rows);
    });
});

router.get('/:id', (req, resp) => {
    const { id } = req.params; // const id = req.params.id;
    console.log('get one => employee with id', id);

    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id] , (errors, rows, fields) => {
        if (errors) {
            console.log(error);
            return
        }

        resp.json(rows[0]);
    });
});

module.exports = router;
