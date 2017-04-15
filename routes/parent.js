var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");

//display the parents

router.get('',function (req,res){
  sqlFunctions.selectFunction("SELECT * from Parent",function(response){
    res.json(response);
  });
}
