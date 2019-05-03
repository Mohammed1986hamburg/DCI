const express=require("express");
const usersRoute= express.Router(); // Express router is a class which helps us to create router handlers. By router handler i mean to not just providing routing to our app but also can extend this routing to handle validation, handle 404 or other errors etc
const validateuserCreate=require('../helpers/valdiadteUserCreate');
const {getHomePage,getAllMovies,getAllactors,getDirectorMovies,getTopMovies,deleteActorByLastName,postNewMovie,updateActor,getMoviesOfYears,getAggregationMoviesWithActors,deleteAllActorsByMovie}=require('../helpers/userRouteHandler')


usersRoute.get('/',getHomePage)
usersRoute.get('/movies',getAllMovies)
usersRoute.get('/actors',getAllactors)
usersRoute.get('/director/:director',getDirectorMovies)
usersRoute.get('/top/:topNumber',getTopMovies)
usersRoute.get('/movies/twoYears/:firstYear/:secondYear',getMoviesOfYears)
usersRoute.get('/moviesWithActors',getAggregationMoviesWithActors)
usersRoute.delete('/DeleteActor/:actorLastname',deleteActorByLastName)
usersRoute.delete('/DeleteAllActors/:movie',deleteAllActorsByMovie)
usersRoute.post('/movies',validateuserCreate,postNewMovie)
usersRoute.put('/actors/:actorLastname',updateActor)



module.exports= usersRoute;

