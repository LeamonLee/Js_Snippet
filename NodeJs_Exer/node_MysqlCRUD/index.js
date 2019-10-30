const mysql = require('mysql');
const express = require("express");
const bodyparser = require("body-parser");


var app = express();

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection(
    {
        
        host:"localhost",
        user:'root',
        password:'mrdl543sst',
        database:"EmployeeDB"
        
        // host:"10.101.100.97",
        // user:'user',
        // password:'1188',
        // database:"myTestdb"
    }
);

mysqlConnection.connect((err)=>{
    if(!err)
        console.log("DB connection succeded.");
    else
        console.log("DB connection failed \n Error : " + JSON.stringify(err, undefined, 2));

});

app.listen(3000, ()=>{
    console.log("Express server is running at port 3000... ");
});

// Get all employees
app.get("/employees", (req, res) => {
    mysqlConnection.query("SELECT * FROM Employee", (err, rows, fields)=>{
        if(!err){
            console.log(rows);
            //console.log(rows[0].EmpID);
            console.log(fields);
            res.send(rows);
        }
        else
            console.log(err);
    });
});

// Get a specific employee
app.get("/employees/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM Employee WHERE EmpID = ?", [req.params.id], (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else
            console.log(err);
    });
});

// Delete a specific employee
app.delete("/employees/:id", (req, res) => {
    mysqlConnection.query("DELETE FROM Employee WHERE EmpID = ?", [req.params.id], (err, rows, fields)=>{
        if(!err){
            res.send("Deleted successfully");
        }
        else
            console.log(err);
    });
});