const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company',
})

mysqlConnection.connect(function(error){
    if (error) {
        console.log('database connection failed, error:', error);
        return;
    }

    console.log('database connection successful');
});

module.exports = mysqlConnection;
