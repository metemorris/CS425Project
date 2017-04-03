var mysql      = require('mysql');
var express    = require("express");
var connection = mysql.createConnection({
  host     : '188.121.44.185',//enter database IP
  user     : 'metemorris',//enter your username
  password : 'CS425Team13!',//enter your password
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

//sample SELECT lookup
connection.query('SELECT * from Admin', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

//sample insert into
connection.query('INSERT INTO `Admin`(`Admin_ID`, `Password`) VALUES ("Morgan","ASDFG")', function(err) {
  if (!err)
    console.log('The solution is: ');
  else
    console.log('Error while performing Query.');
});

connection.end();
