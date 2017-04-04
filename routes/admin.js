var mysql      = require('mysql');
const express = require("express");
const router = express.Router();


//update admin name


//update admin password


//display the admins
router.get('',function (req,res){
  var connection = mysql.createConnection({
    host     : '188.121.44.185',//enter database IP
    user     : 'metemorris',//enter your username
    password : 'CS425Team13!',//enter your password
    database : 'metemorris_CS425'
  });
  connection.connect(
    function(err){
      if(!err) {
        console.log("Database is connected ... nn");
        connection.query('SELECT * from Admin', function(err, rows, fields) {
          if (!err){
            res.json(rows);
            connection.end();
          }
          else{
            console.log('Error while performing Query.');
            connection.end();
          }
        });
      }
    else {
      console.log("Error connecting database ... nn"+err);
    }
  });




})


//delete admin

//add admin


module.exports = router;
