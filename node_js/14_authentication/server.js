// npm i jsonwebtoken  
// npm install cookie-parser
const express= require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();

const databaseUrl = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-wuxiw.mongodb.net/14_authentication`
const jwt= require('jsonwebtoken');  //jwt.io
//  https://medium.com/dev-bits/a-guide-for-adding-jwt-token-based-authentication-to-your-single-page-nodejs-applications-c403f7cf04f4
const cookieParser= require('cookie-parser');

// to all
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// open server on 4000 and connect to DB
app.listen(4000, async()=>{
    try{
        console.log('server is listing to port 4000');
        console.log('Seconds before connecting');
        await mongoose.connect(databaseUrl,{useNewUrlParser:true});
        console.log('the database connected');
    }
    catch{
        console.log(error);

    }
});

// schema
const userSchema=new mongoose.Schema({
    username: {type: String, required: true, trim: true, minlength: [3, 'Username must be at least 3 characters long']},
    password: {type: String,required: true},
  } ,{versionKey: false})


// Model 
//to connect the collections to schema, 
//and the the mongoose is connected to DB url above : await mongoose.connect(databaseUrl,{useNewUrlParser:true});
const userModel=mongoose.model('users',userSchema);

// post new user function
const postNewUser=async (req, res, next)=>{
        try{
        await userModel.create(req.body);
         res.status(200).json({ message:`you had added new user succesfully`});
        }catch(error){
            next(error); // it will go next madleware (app.use(errorHandler);) 
                        // next() it can to be alone without to go next madleware the has (req, res, next)
                        // next(error) it will go to next madleware the has (err, req, res, next) = app.use(errorHandler);
        }
}

// to test your sign in 
const signIn= async (req, res, next) => {
    try {
      const userFound = await userModel.findOne({username: req.body.username,password: req.body.password},{_id:0});
      if(!userFound)
      {
       return res.status(404).json({message: 'Either username or password not correct'})
      }
      else{
      const initialToken= await jwt.sign({username:userFound.username},'anything_to_encreption' );
      console.log(initialToken);
      res.cookie('authToken', initialToken, {httpOnly: true});
      res.status(200).json(`${userFound.username}, you are loged in succesfully and get Token via cookie  `) 
      }
      
    }catch (error) {
      next(error);
    }
  }

// to delelet acount by token
const deleteByToken=async (req, res, next)=>{
    try{
    const inputToken= req.cookies.authToken;
    console.log(inputToken);

    await jwt.verify(inputToken,'anything_to_encreption');
    const decodedUser= await jwt.decode(inputToken,'anything_to_encreption');
    const deletedUser=await userModel.findOneAndDelete({username:decodedUser.username});
    deletedUser? res.status(202).json({ message:`you had had verified and deleted succesfully`}): res.status(206).json({ message:`the user not found`});
    }catch(error){
        next(error); 
    }
}

// to logout acount by token and clear 
const logOut=async (req, res, next)=>{
  try{
  const inputToken= req.cookies.authToken;
  console.log(inputToken);
  await jwt.verify(inputToken,'anything_to_encreption');
  res.clearCookie('authToken');
  res.status(202).json({ message:`you had had loged out by inputToken-clearCookie succesfully`});
  }catch(error){
      next(error); 
  }
}


// handling error function
const errorHandler=(err, req,res,next)=>{                   //err=errorCase 

    err.status= err.status || 500;     // 500 as defult 
    res.status(err.status).json({message: err.message})
}



app.post('/users',postNewUser);
app.post('/users/signin',signIn);
app.delete('/users/delete',deleteByToken);
app.get('/users/logout',logOut);
app.use(errorHandler);





