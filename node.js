const express=require('express')

const app=express()
const mongoose=require('mongoose')

const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27071/e-com');
    const productSchema= new mongoose.Schema({});
    const productModel=mongoose.model('users',productSchema)
    const data=productModel.find()
    console.warn(data)
}
connectDB();

app.listen(3000);