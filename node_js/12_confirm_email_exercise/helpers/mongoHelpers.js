const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const databaseUrl = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-wuxiw.mongodb.net/12_confirm_email_exercise`



const connectToMongo= async ()=>{
    try{
        console.log('Seconds before connecting');
        await mongoose.connect(databaseUrl,{useNewUrlParser:true});
        console.log('the database connected');
    }
    catch{
        console.log(error);

    }
}


module.exports=connectToMongo;