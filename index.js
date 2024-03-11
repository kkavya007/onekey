const express = require('express');
const sequelize = require('./config/db');
const {createUser} = require('./models/userModel');
const {createProduct} = require('./models/productModel');
const {createLeads} = require('./models/leadsModel');
const {createDynamicProperties} = require('./models/dynamicPropertyModel');
const port = 3050;
const app = express();

createProduct();
createLeads();
createDynamicProperties();
app.get('/',(req,res)=>{
    res.json('Welcome to onekey');
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
