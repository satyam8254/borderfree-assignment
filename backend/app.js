const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./root/auth")
const bodyparser = require("body-parser");
const Product = require("./model/product");
const productdata = require("./productdata/product");
const env = require("dotenv");
const cors = require("cors");
env.config()
mongoose.connect(process.env.DATABASE)
const PORT = process.env.PORT

// const productData = async ()=>{
//      const data = await Product.insertMany(productdata)
//      console.log(data);
// }
// productData();
const app = express();
app.use(bodyparser());
// app.get("/about",(req,res)=>{
//     res.cookie("test","satyam");
//     res.send("hello about from server");
// })


app.use(cors());
app.use(require("./root/auth"));
app.listen(5000,console.log(`server is listening at port:- ${PORT}`))