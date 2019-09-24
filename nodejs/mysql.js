const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'opentutorials'
});

connection.connect();

connection.query('SELECT * From topic', function(error, results, fields) {
  if (error) throw error;
  console.table(results);
});

connection.end();
