const express=require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.PORT;
const localhost="mongodb://127.0.0.1:27017/";
const Atlas=process.env.DB
const DB_NAME="TO_DO_LIST";
const URL=localhost+DB_NAME;
//DB connection
const {Connect_to_Mongo_DB}=require('./connect');
Connect_to_Mongo_DB(Atlas);
//Router Connections
const ExampleRouter=require('./routes/example');
app.use(express.json());
app.use('/example',ExampleRouter);

app.get("/",(req,res)=>{
    res.json("Welcome to URL shortener)");
})
//Listening to APP through PORT 3000.
app.listen(process.env.PORT || 3000,()=>{
console.log("Server Started at PORT:Atlas ");
});