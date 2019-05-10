const mongoose=require('mongoose');



const userSchema=new mongoose.Schema({ 
  
  isConfirmed:{type:Boolean,default:false,required: true}, 
  userName: {type: String, required: true, trim: true, minlength: [3, 'Username must be at least 3 characters long']},
  email: {type: String, required: true, trim: true, match: [/^[0-9A-Za-z\.]{3,50}\@[A-Za-z]{2,30}\.[A-Za-z]{2,10}$/i, 'The email you provider does not match the pattern blabla@example.something']},
  password: {type: String,required: true},
  timeStampIdentifer:{type:String},
} ,{versionKey: false})

module.exports=userSchema;