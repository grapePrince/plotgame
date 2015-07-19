var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'rahata',
  password : 'latte!23',
  database : 'plotgame'
});

connection.connect();
connection.query('SELECT * from Card', function(err, rows, fields) {
  if (err) throw err;

  console.log('rows: ', rows);
});
connection.end();