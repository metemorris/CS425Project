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


//getpasswords
router.get('/password',function (req,res){
  sqlFunctions.selectFunction("SELECT password from Admin",function(response){
    res.json(response);
  });
})

//delete admin
router.post('',function (req,res){
  console.log("Deleting admin...");
  select.INSERT('DELETE FROM `Admin`(`Admin_ID`, `Password`) WHERE Admin_ID = "anothr" AND Password = "MALYALAM")',function(response){

    res.json(response);
  });
})

//add admin
router.post('',function (req,res){
  console.log("Adding admin...");
  select.INSERT('INSERT INTO `Admin`(`Admin_ID`, `Password`) VALUES ("anothr","MALYALAM")',function(response){

    res.json(response);
  });
})


module.exports = router;
