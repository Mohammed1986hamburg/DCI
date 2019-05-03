const mongoose=require('mongoose');

const moviesSchema=require('../schemas/moviesSchema');
const moviesModel=mongoose.model('movies',moviesSchema);  // ('database collection', the Schema )

const actorsSchema=require('../schemas/actorsSchema');
const actorsModel=mongoose.model('actors',actorsSchema);  // ('database collection', the Schema )

module.exports={moviesModel,actorsModel};