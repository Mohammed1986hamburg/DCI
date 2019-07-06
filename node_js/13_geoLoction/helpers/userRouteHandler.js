const express = require('express');
const shopModel = require('../models/shopModel');

 

const getByDistanceFun= async (req,res, next)=>{

  try {
    const allRestaurantsNear = await shopModel.aggregate([{
      $geoNear: {
        near: {type: 'Point', coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]},
        maxDistance: req.body.radius * 1000,
        spherical: true,
        distanceField: "dist.calculated" // like as in mongo aggregate
      }
    }, {$project: {_id: 0}}])

    res.status(200).json(allRestaurantsNear);
  }catch (error) {
    next(error);
  }

}

const saveImage= async (req,res, next)=>{

  console.log(req.file);
  res.status(200).json({msg:"ok"})

}


module.exports={getByDistanceFun,saveImage}




