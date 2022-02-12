const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./root/users");
const bodyparser = require("body-parser");
const app = express();
db="mongodb://localhost:27017/borderfree"
mongoose.connect(db)
app.use(bodyparser());

app.use("/signup",userRouter);

app.listen(5000,console.log("server is listening at port:- 5000"))