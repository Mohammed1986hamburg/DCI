const createError=require('http-errors');
const userModel=require('../models/userModel');
const {validationResult} = require('express-validator/check');

const getAllUsers=async (req, res, next)=>{
    const allUsers=await userModel.find();
    res.status(200).send(allUsers);
}

const getUserBYUserName=async (req, res, next)=>{
    const user=await userModel.findOne({ userName:req.params.username});
    if(user){
        res.status(200).send(user);
    } 
    else{ //  error handler
        const errorCase = new Error(`the id:${req.params.username}  you set not found!`)
        errorCase.status=404;
        next(errorCase);
    } 
}

const updateUserByUserName=  async(req, res, next)=>{
    try{
        const updatedUser = await userModel.findOneAndUpdate({userName: req.params.username}, req.body, {new: true});
	    updatedUser ? res.status(200).json(updatedUser) : res.status(404).send('The user does not exist');
       }catch(error){
           next(error)
       }
}

const deleteUserByUserName=async (req, res, next)=>{

    try{
     await userModel.findOneAndDelete({userName: req.params.username})
    res.status(200).send( ` you had deleted ${req.params.username}`); 
    }catch(error){
        next(error)
    }
}

const postNewUser=async (req, res, next)=>{
    const errors= validationResult(req);// ??
    if(errors.isEmpty()){
        try{
        await userModel.create(req.body);
         res.status(200).json({ message:`you had added user  to users succesfully`});
        }catch(error){
            next(error);
        }
    }else{
        next(createError(403,errors.array()[0].msg))
    }

}


module.exports={getAllUsers,getUserBYUserName,updateUserByUserName,deleteUserByUserName,postNewUser}

