const createError=require('http-errors');
const dataModel=require('../models/dataModel');
const {validationResult}=require('express-validator/check');
const bcrypt = require('bcrypt');
const nodemailer= require('nodemailer');
const dotenv=require('dotenv').config();

const emailTransporter= nodemailer.createTransport({  // sender mail

    service: 'gmail',
    auth: {
        user:'best.pid@gmail.com',

        pass: process.env.PASSWOOR_MAIL_GMAIL
    
    }

})




const postNewUser=async (req, res, next)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;

       
        req.body.timeStampIdentifer= String( Date.now())+ String(( Math.floor(Math.random() * 10000) + 1)) ;
        await dataModel.create(req.body);
        
         // mail sending 
        var mailOptions = {
        from: 'best.pid@gmail.com',
        to: 'm.wahba@gmx.de',
        subject: 'Sending First Email using Node.js',
        html:`<h3> <a href="http://localhost:4000/email/confirm/${req.body.timeStampIdentifer}">Confirm your account now!</a> </h3>`
      }

      await emailTransporter.sendMail(mailOptions) ;

      res.status(201).json({message: 'User was created'});

          }catch(error) {
            next(error);
          }
}

const getConfirmMail= async (req,res, next)=>{

  try{
    const user=await dataModel.findOneAndUpdate({timeStampIdentifer: req.params.confirmCode}, { $set: { isConfirmed:true }, $unset: {timeStampIdentifer: true}});
    user ? res.status(201).json({message: `You were confirmed, thanks ${user.userName}`})/*res.redirect('https://www.google.de')*/ : res.status(404).json({message: 'User was not found'});
  }catch(error){
     next(error)
  }

}


module.exports={postNewUser,getConfirmMail}