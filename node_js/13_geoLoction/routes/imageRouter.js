const express=require('express');
const imageRouter=express.Router();
//const validateUserCreate=require('../helpers/validateUserCreate');
const {saveImage}=require('../helpers/userRouteHandler');



imageRouter.post('/upload',saveImage);

module.exports=imageRouter;
