import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));


app.use(express.static("public"));
await mongoose.connect("mongodb://127.0.0.1:27017/software");

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",async(req,_res)=>{
    try{
        const data=new User(req.body);
        const savedData = await data.save();
        console.log(savedData);
        _res.redirect("/");
    }catch(error){
        console.log("Error occurred:", error);
        _res.status(500).send("Error occurred while saving data");
    }
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})