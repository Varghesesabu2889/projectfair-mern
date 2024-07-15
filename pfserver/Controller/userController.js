// const users = require('../Models/userSchema')
const user = require('../Models/userSchema')
const jwt =  require("jsonwebtoken");

//register
exports.register = async (req,res)=>{
    console.log("inside  register controller function");
    const{username,email,password}= req.body;
     //checking if the username and password
    //  console.log(`${username},${email},${password}`);
    const existingUser = await  user.findOne({ email: email })
    try{
    if(existingUser){
        res.status(406).json("user already exist...please login!!!")
    }else{
        const newUser = new user({
            username,email,password,github:"",linkedin:"",profile:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
}
catch(err) {
    res.status(401).json(`register api failed ,Error ,${err}`)
}
}
//login
exports.login=async(req,res)=> {
    console.log("inside  login controller function");
    const{email,password}= req.body;
    try{
const  existingUser = await user.findOne({ email,password });
if(existingUser){
    const token = jwt.sign({userId:existingUser._id},"secret123")
    res.status(200).json({
        existingUser,token
    })
}else{
    res.status(404).json("Incorrect email or Password")
}
    }
    catch(err){
        res.status(401).json("API failed failed ,Error "+ err)
    }
}
