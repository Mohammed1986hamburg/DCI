const express=require("express");
const usersRoute= express.Router(); // Express router is a class which helps us to create router handlers. By router handler i mean to not just providing routing to our app but also can extend this routing to handle validation, handle 404 or other errors etc
const vaiidateUserCreate=require('../helpers/valdiadteUserCreate');
const {getAllUsers,getUserBYUserName,updateUserByUserName,deleteUserByUserName,postNewUser}=require('../helpers/userRouteHandler')
const nodemailer= require('nodemailer');// to support mail
require('dotenv').config(); // to deal with env files


usersRoute.get('/',getAllUsers)
usersRoute.get('/:username',getUserBYUserName)
usersRoute.post('/',vaiidateUserCreate,postNewUser)
usersRoute.put('/:username',updateUserByUserName)
usersRoute.delete('/:username',deleteUserByUserName )
 module.exports= usersRoute;

/*

const emailTransporter= nodemailer.createTransport({  // sender mail

    service: 'hotmail',
    auth: {
        user:'best.pid@hotmail.com',

        pass: process.env.PASSWOR_MAIL
    
    }

})



    // mail sending from w3school
   // 

   var mailOptions = {
    from: 'best.pid@hotmail.com',
    to: 'best.pid@gmail.com',
    subject: 'Sending First Email using Node.js',
    html: `<h1>Welcome</h1><p>That was easy!</p><h1>you had added user:${req.body.userName}  to users succesfully</h1>`
  }
  emailTransporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error); //
    } else {
      console.log('Email sent: ' + info.response);//
    }
  });    
     //                    
    }
    
    else{
        res.status(422).json({ TheErrors: errors.array()  });
        
        
    }
    
    
})


*/


