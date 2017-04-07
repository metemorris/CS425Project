var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");



//update admin name


//update admin password


//display the admins
router.get('',function (req,res){
  sqlFunctions.selectFunction("SELECT * from Admin",function(response){
    res.json(response);
  });
})


//delete admin

//add admin
router.post('',function (req,res){
  console.log("Insert Database is connected ...");
  select.INSERT('INSERT INTO `Admin`(`Admin_ID`, `Password`) VALUES ("anothr","MALYALAM")',function(response){

    res.json(response);
  });
})


module.exports = router;
