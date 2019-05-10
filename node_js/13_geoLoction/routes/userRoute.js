const express=require('express');
const userRoute=express.Router();
//const validateUserCreate=require('../helpers/validateUserCreate');
const {postNewUser,getByDistanceFun}=require('../helpers/userRouteHandler');


//userRoute.post('/create',postNewUser);
userRoute.post('/getByDistance',getByDistanceFun);

module.exports=userRoute;

