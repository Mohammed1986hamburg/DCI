const createError=require('http-errors');
const dataModel=require('../models/dataModel');
const {validationResult} = require('express-validator/check');


const getHomePage=async (req, res, next)=>{
    res.status(200).send('This is the home page');
}

const getAllMovies=async (req, res, next)=>{
    const AllMovies=await dataModel.moviesModel.find()
    res.status(200).send(AllMovies);
}

const getAllactors=async (req, res, next)=>{
    const Allactors=await dataModel.actorsModel.find()
    res.status(200).send(Allactors);
}

const getDirectorMovies=async (req, res, next)=>{
    const directorMovies=await dataModel.moviesModel.find({ director:req.params.director},{_id:0,name:1});
    if(directorMovies){
        res.status(200).send(directorMovies);
    } 
    else{ //  error handler
        const errorCase = new Error(`the director:${req.params.director}  you set not found!`)
        errorCase.status=404;
        next(errorCase);
    } 
}

const getTopMovies=async (req, res, next)=>{
    const TopMovies=await dataModel.moviesModel.find({}).sort('-imdb_ratio').limit(Number(req.params.topNumber)).select('name director -_id');   
    if(TopMovies){
        res.status(200).send(TopMovies);
    } 
    else{ //  error handler
        const errorCase = new Error(`the director:${req.params.topNumber}  you set not found!`)
        errorCase.status=404;
        next(errorCase);
    } 
}

const getMoviesOfYears=async (req, res, next)=>{
    const TopMovies=await dataModel.moviesModel.find({productionYear :{$gte:req.params.firstYear,$lte:req.params.secondYear}},{_id:0,name:1,productionYear:1}).sort('productionYear');   
    if(TopMovies){
        res.status(200).send(TopMovies);
    } 
    else{ //  error handler
        const errorCase = new Error(`the director:${req.params.secondYear}  you set not found!`)
        errorCase.status=404;
        next(errorCase);
    } 
}

// db.movies.aggregate([ { $lookup: { from:"actors", localField:"name", foreignField:"moviesPlayed", as:"actorsToMovies" } } ]).pretty()
const getAggregationMoviesWithActors=async (req, res, next)=>{
    const MoviesWithActors=await dataModel.moviesModel.aggregate([ { $lookup: { from:"actors", localField:"name", foreignField:"moviesPlayed", as:"actorsPlayed" } } ]);   
    if(MoviesWithActors){
        res.status(200).send(MoviesWithActors);
    } 
    else{ //  error handler
        const errorCase = new Error(`Wrong in your data!`)
        errorCase.status=404;
        next(errorCase);
    } 
}

const deleteActorByLastName=async (req, res, next)=>{

    try{
     await dataModel.actorsModel.findOneAndDelete({lastName: req.params.actorLastname})
    res.status(200).send( ` you had deleted ${req.params.actorLastname}`); 
    }catch(error){
        next(error)
    }
}

const deleteAllActorsByMovie=async (req, res, next)=>{

    try{
     await dataModel.actorsModel.remove({'moviesPlayed':{$elemMatch:{$eq:req.params.movie}} })
    res.status(200).send( ` you had deleted all actors of ${req.params.movie} movie`); 
    }catch(error){
        next(error)
    }
}

const postNewMovie=async (req, res, next)=>{
    const errors= validationResult(req);// ??
    if(errors.isEmpty()){
        try{
        await dataModel.moviesModel.create(req.body);
         res.status(200).json({ message:`you had added new movie succesfully`});
        }catch(error){
            next(error);
        }
    }else{
        next(createError(403,errors.array()[0].msg))
    }

}

const updateActor=  async(req, res, next)=>{
    try{
        const updateActor = await dataModel.actorsModel.findOneAndUpdate({lastName: req.params.actorLastname}, req.body, {new: true});
	    updateActor ? res.status(200).json(updateActor) : res.status(404).send('The user does not exist');
       }catch(error){
           next(error)
       }
}





module.exports={getHomePage,getAllMovies,getAllactors,getDirectorMovies,getTopMovies,updateActor,deleteActorByLastName,postNewMovie,getMoviesOfYears,getAggregationMoviesWithActors,deleteAllActorsByMovie}

