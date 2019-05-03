const mongoose=require('mongoose');
const userSchema=require('../schemas/userSchema');

const userModel=mongoose.model('users',userSchema);  // ('database collection', the Schema )

module.exports=userModel;