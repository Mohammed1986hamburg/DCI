const express=require('express');
const userRoute=express.Router();
//const validateUserCreate=require('../helpers/validateUserCreate');
const {postNewUser,getConfirmMail}=require('../helpers/userRouteHandler');


userRoute.post('/create',postNewUser);
userRoute.get('/email/confirm/:confirmCode',getConfirmMail);

module.exports=userRoute;

