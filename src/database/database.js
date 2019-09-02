const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company',
})

mysqlConnection.connect(function(error){
    if (error) {
        console.error('database connection failed, error:', error);

        if (error.code === 'ECONNREFUSED') {
            console.error('Are you sure MySQL is running??');
        }
        return;
    }

    console.log('database connection successful');
});

module.exports = mysqlConnection;
