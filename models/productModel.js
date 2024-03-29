const sequelize = require('../config/db');
const Datatypes = require('sequelize');
const User = require('./userModel');
const Product = sequelize.define({
    product_id:{
        type:Datatypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },
    name:{
        type:Datatypes.STRING(100),
        allowNull:false
    },
    description:{
        type:Datatypes.TEXT
    },
    owner_id:{
        type:Datatypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:'user_id'
        }
    }
},{versionKey:false,timestamps:true});

const createProduct = async()=>{
    await Product.sync({force:true});
    console.log('Products table is created');
}
module.exports = {Product,createProduct};