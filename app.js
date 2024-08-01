const express=require("express");
const exphbs =require("express-handlebars");
const bodyParser =require("body-parser");
const mysql=require("mysql");

require("dotenv").config();




const app=express();
const port=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//static files
app.use(express.static("public"));
//template engine
const handlebars =exphbs.create({extname:".hbs"});
app.engine("hbs",handlebars.engine);
app.set("view engine","hbs");

//router
app.get("/",(req,res)=>{
    res.render("home");
});

app.listen(port,()=>{
    console.log("listening port: "+port);
});