// import {executeDBchildOperations} from './connect/db_child.js';
// import {connectToCluster} from './connect/db_connect.js';
// import mongoose from 'mongoose';
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { db_port,db_url } from './connect/getENV.js';


const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db_elements = require("./connect/getENV")
const routes = require("./routes")



mongoose.set('strictQuery',true);
const app=express()
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use("/api", routes)

mongoose.connect(db_elements.db_url,
{

}).then(()=>
{
    
    app.listen(db_elements.db_port,()=>
    {
        console.log(`Server running on port: ${db_elements.db_port}`);
    }
)}).catch((error)=>
{
    console.log(error.message)
});


















// npm run server
