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


module.exports={getByDistanceFun}




