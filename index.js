const express = require('express');
const sequelize = require('./config/db');
const Product = require ('./models/productModel');
const port = 3050;
const app = express();
app.get('/',async (req,res)=>{
    let Product = await Product.findAll();
    res.json('Welcome to onekey');
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
