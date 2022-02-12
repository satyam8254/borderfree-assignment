const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/",async(req,res)=>{
    const user = await User.create(req.body);
    res.json({
        status:"sucess",
        data: user
    })
    console.log(req.body)
})

module.exports = router