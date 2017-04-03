var mysql      = require('mysql');
var express    = require("express");
var connection = mysql.createConnection({
  host     : '',//enter database IP
  user     : '',//enter your username
  password : '',//enter your password
  database : 'metemorris_CS425'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

connection.query('SELECT * from Admin', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
