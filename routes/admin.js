var mysql      = require('mysql');
const express = require("express");
const router = express.Router();

var connection = mysql.createConnection({
  host     : '188.121.44.185',//enter database IP
  user     : 'metemorris',//enter your username
  password : 'CS425Team13!',//enter your password
  database : 'metemorris_CS425'
});
//update admin name


//update admin password


//display the admins
router.get('',function (req,res){
  connection.connect(
    function(err){
  if(!err) {
      console.log("Database is connected ... nn");
  } else {
      console.log("Error connecting database ... nn");
  }
  });

  connection.query('SELECT * from Admin', function(err, rows, fields) {
    if (!err)
      res.json(rows);
    else
      console.log('Error while performing Query.');
  });

  connection.end();
})


//delete admin

//add admin


module.exports = router;
