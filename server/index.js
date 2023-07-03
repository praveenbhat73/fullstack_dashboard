//  installed packages -> nodemon, dotenv, morgan, helmet, express, body-parser, mongoose, cors 
// import packages
// const express=require('express');
// const helmet=require('helmet');
// const cors =require('cors');
//just include in package.json file type:"module" to import the files like below  
import express from 'express';
//express in node js framework which mainly easily helps to create web server side application 
//express helps to create easy api and middleware function
//middleware function which has request sent from client and does modification or operation on that and pushes into the next functions 
//middleware eg: login checking
import cors from 'cors';
//cors its middleware function which is used to check whether the request is sent from the same web browser(developer) or different(client from his machine)
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import salesRoutes from "./routes/sales.js";
import managementRoutes from "./routes/management.js";
// import OverallStat from './models/OverallStat.js';
// import AffiliateStat from './models/AffiliateStat.js';

// import User from './models/User.js'
// import Product from './models/Product.js';
// import ProductStat from './models/ProductStat.js';
// import {  } from './data/index.js';
// import {dataProduct,dataProductStat} from "./data/index.js"
// import Transaction from './models/Transaction.js';
// import {dataTransaction} from './data/index.js'
// import {dataOverallStat} from './data/index.js'
// import { dataAffiliateStat} from './data/index.js'
dotenv.config({path:'.env.local'});
const app=express();
//initialise the express instance to the app and use app to call functions
//app.use()-> its used to add middleware function to server side
//app.use()-> helmet/any package is adding the middleware function globally
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({
    policy: 'cross-origin'
}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

//app.get is mainly used for http get request when the web url is on specific path it takes path,req,res and res as output on webpage on the server localhost
//below when webpage at localhost:5001/ is reached and when http get request is made it calls below app.get() callback function 
//and prints the hello world 
app.get('/',(req,res)=>{
    res.send('Hello World');
})

// ROUTES 
//app.use() -> is also used to set middleware function to the specific routes 

app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);

// Mongodb connect 
const PORT=process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>
    console.log(`Server is running on port ${PORT}`))
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
}).catch((error)=>{
    console.log(`Server is not connected to ${PORT}`)
})
//app.listen is used to start the server at a specific port 
//there http get -> its used in client side to retrieve data from server 
//http post -> client sends the data to server