const db = require("../models/index");
const user = db.user;
const bcrypt = require("bcrypt");

user.registerUser = async(data)=>{
  let exist = await user.findOne({where:{email:data.email}});
  if(exist){
    return ({status:403,sucess:false,message:"User Already Exist."});
  }
  let salt = await bcrypt.genSalt(10);
  let hashpass = await bcrypt.hash(exist.password,salt);
  let result = await 
}