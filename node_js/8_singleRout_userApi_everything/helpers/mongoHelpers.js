const mongoose=require('mongoose');
const databaseUrl= 'mongodb://localhost:27017/users';


const connectToMongo = async () =>{
    try {
    console.log('Seconds before connecting');
    await mongoose.connect(databaseUrl,{useNewUrlParser:true});
    console.log('the database connected');
    }
    catch(error){
        console.log(error);
    }

}

module.exports=connectToMongo;