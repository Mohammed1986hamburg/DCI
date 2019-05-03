const mongoose=require('mongoose');


// here
const actorsSchema=new mongoose.Schema({      
    firstName: {type:String,required:true},
    lastName:  {type:String,required:true},
    moviesPlayed: {type:[String],required:true}
} ,{versionKey: false})

module.exports=actorsSchema;
