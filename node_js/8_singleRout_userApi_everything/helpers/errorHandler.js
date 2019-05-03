const errorHandler=(err, req,res,next)=>{                   //err=errorCase 

    err.status= err.status || 500;     // 500 as defult 
    res.status(err.status).json({message: err.message})
}


module.exports=errorHandler;