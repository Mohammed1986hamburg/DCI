// seed to insert data from json

const mongoose = require('mongoose');
const dataModel=require('./models/dataModel.js');
const allMovies = require('./movies.json');
const allActors = require('./actors.json');
const dotenv = require('dotenv').config();
const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-wuxiw.mongodb.net/imdb`


const mongoConnect = async () => {
  try {
    await mongoose.connect(url, {useNewUrlParser: true});
    console.log('Connected to Mongo lab');
    await dataModel.actorsModel.insertMany(allActors);
    await dataModel.moviesModel.insertMany(allMovies);
    await mongoose.disconnect(url);
    console.log('Disconnected from mongo lab');
  }catch (error) {
    console.log(error);
  }
}

mongoConnect();
