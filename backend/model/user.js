const mongoose =  require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

//hashing the password
UserSchema.pre('save', async function(next){
    console.log("hi from password hashing");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

//generating token
UserSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}


//collection creation
const user = mongoose.model("user",UserSchema);
module.exports = user;