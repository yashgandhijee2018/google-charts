var express=require('express');
var app=express(); 

app.listen(4000, ()=> console.log("listening at 4000")); 
app.use(express.static('public'));