var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");

//display the students

router.get('',function (req,res){
  sqlFunctions.selectFunction("SELECT * from Student",function(response){
    res.json(response);
  });
}