const mongoose=require('mongoose');

const shopSchema=require('../schemas/shopSchema');
const shopModel=mongoose.model('restaurants',shopSchema);

module.exports=shopModel;