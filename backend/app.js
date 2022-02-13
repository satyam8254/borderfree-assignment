const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./root/auth")
const bodyparser = require("body-parser");
const env = require("dotenv");
env.config()
mongoose.connect(process.env.db)
const PORT = process.env.PORT
const app = express();
app.use(bodyparser());
// app.get("/about",(req,res)=>{
//     res.cookie("test","satyam");
//     res.send("hello about from server");
// })
app.use(require("./root/auth"));
app.listen(5000,console.log(`server is listening at port:- ${PORT}`))