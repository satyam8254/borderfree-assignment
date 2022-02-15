const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const Product = require("../model/product");
const productdata = require("../productdata/product");


router.post("/register",async(req,res)=>{

    const {name, email, password} = req.body;

    if (!name|| !email|| !password){
        return res.status(422).json({error:"all field are require"})
    }

    try {
            const userExist = await User.findOne({email:email})
            if (userExist){
                return res.status(422).json({error:"Email already Exist"})
            }
    
            const user = new User({name, email, password});
            const userRegister = await user.save();
            
            if(userRegister){
                res.status(201).json({message:"user registered sucessfully"});
            }
            else {
                res.status(500).json({error:"Failed to register"})
            }

        } catch (err) {
            console.log(err);  
        }

});



router.post("/signin",async(req,res)=>{
   
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                error:"all field are required"
            })
        }
        const userLogin = await User.findOne({email:email});
        //console.log(userLogin);

        if (userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwttoken", token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({
                    error:"Invalid crediential"
                });
            }else{
                res.json({
                    message:"Login Successfully"
                });
            }
        }
        else{
            res.status(400).json({error:"Invalid Crediential"})
        }
        
    } catch (err) {
        console.log(err)
    }

})


router.get("/product",async(req,res)=>{
    const data = await Product.find();
    res.json(data)
    console.log(data)
})


router.get("/push",async(req,res)=>{
    const data = await Product.insertMany(productdata);
    res.json(data)
})


router.get("/product/:id",async(req,res)=>{
    const pid = req.params.id;
    const product = await Product.findById(pid);

    var updatedItem = product.itemclicked;
    updatedItem+=1
    const update = await Product.findByIdAndUpdate(pid,{itemclicked:updatedItem})
    res.json(product)
})

module.exports = router


























































































// router.post("/register",async(req,res)=>{
//     const user = await User.create(req.body);
//     res.json({
//         status:"sucess",
//         data: user
//     })
//     console.log(req.body)
// })
//=========using promises===========================================
// router.post("/",(req,res)=>{
//     const {name, email, password} = req.body;
//     if (!name|| !email|| ! password){
//         return res.status(422).json({error:"all field are require"})
//     }

//     User.findOne({email:email})
//     .then((userExist) =>{
//         if (userExist){
//             return res.status(422).json({error:"Email already Exist"})
//         }

//         const user = new User({name, email, password});
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered sucessfully"})
//         }).catch((err)=> res.status(500).json({error:"Failed to register"}))
//     }).catch(err => {console.log(err);});
// })

