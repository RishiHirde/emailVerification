//jshint esversion:6

import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
//Creating Home Route
app.get("/", function(req,res) {
    res.sendFile(__dirname+"/index.html");
});
// const rando = Math.random();
// const otp = Math.floor(rando*1000000);
// console.log(otp);
app.post("/", function(req,res) {
    var num = Number(req.body.num);
    if(num===otp){
        flag===1;
    }
    else{
        flag===0;
    }
});
// console.log(flag);
//Spinning up the server
app.listen(3000, function(req,res) {
    console.log("Server is running on port 3000");
});
//
