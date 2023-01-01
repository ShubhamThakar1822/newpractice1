var express = require("express");
var app = express();
app.get("/",function(req,resp){
    resp.send("Ok Gyus Swaranjali Boys Lets Go to Your clasroom")
})
app.listen(3000);
console.log("-----Server is ONN------ ");