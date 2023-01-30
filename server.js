//jshint esversion:6

const { request } = require("express");
const express = require("express");

const app = express();

app.get("/", function(req, res{
res.send("<h1>Hello, World!</h1>");
})

app.get("/about", function(req, res){
    res.send("<h1>Good Monring , my NAME IS jACOB rOSS , I AM THE CREATTOPR OF THIS SERVER AND WILLL BE ASISTING YOU WITH YOUR TRAVELS THROUGHT THE ENTERNET</h1>");
    })


    app.get("/contact", function(req, res){
        res.send("<h1>Jacob @ jACOB .COM</h1>");
        })

app.listen(3000, function() {
 console.log("Server started on port 3000");   
});