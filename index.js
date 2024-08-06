const express=require('express');
const app=express();
const cors=require("cors");
require('dotenv').config();

const Atlas=process.env.DB
//DB connection
const {Connect_to_Mongo_DB}=require('./connect');
Connect_to_Mongo_DB(Atlas);
//Router Connections
//const ExampleRouter=require('./routes/example');
app.use(express.json());
app.use(cors());
//app.use('/example',ExampleRouter);

app.get("/",(req,res)=>{
    res.json("Welcome to To Do List)");
})
//Listening to APP through PORT 3000.
app.listen(process.env.PORT || 3000,()=>{
console.log("Server Started at PORT:Atlas ");
});