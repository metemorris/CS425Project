var mysql      = require('mysql');
const express = require("express");

//SELECT FUNCTION
var selectFunction = function (selectStatement,callback){
  var connection = mysql.createConnection({
  host     : '188.121.44.185',//enter database IP
  user     : 'metemorris',//enter your username
  password : 'CS425Team13!',//enter your password
  database : 'metemorris_CS425'
  });
  connection.connect(
    function(err){
      if(!err) {
        console.log("Database is connected ...");
        console.log(selectStatement);
        connection.query(selectStatement, function(err, rows, fields) {
          if (!err){
            connection.end();
            return callback(rows);
          }
          else{
            console.log('Error while performing Query.'+err);
            connection.end();
            //return 'Error while performing Query.'+err;
          }
        });
      }
      else { 
        console.log("Error connecting database ... nn"+err);
        //return "Error connecting database ... nn"+err;
      }
    });
}

//INSERT FUNCTION
var insertFunction = function (insertStatement,callback){
  var connection = mysql.createConnection({
  host     : '188.121.44.185',//enter database IP
  user     : 'metemorris',//enter your username
  password : 'CS425Team13!',//enter your password
  database : 'metemorris_CS425'
  });
  connection.connect(
    function(err){
      if(!err) {
        console.log("Insert Database is connected ...");
        connection.query(insertStatement, function(err) {
          if (!err){
            connection.end();
            return callback("Value "+insertStatement+"inserted");
          }
          else{
            //console.log('Error while performing Query.'+err);
            connection.end();
            return callback('Error while performing Query.'+err);
            //return 'Error while performing Query.'+err;
          }
        });
      }
      else {
        return callback("Error connecting database ... nn"+err);
        //return "Error connecting database ... nn"+err;
      }
    });
}


module.exports.selectFunction = selectFunction;
module.exports.insertFunction = insertFunction;
