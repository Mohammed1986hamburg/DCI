
const shopModel=require('./models/shopModel');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-wuxiw.mongodb.net/13_geoLoction`
const faker= require('faker');

mongoose.set('useCreateIndex',true); // ???????

const CreateRandomShops= ()=>{
    const allShops=[];
    
    for (let i = 0; i < 49980; i++) {

       const fakeShop={
        name:faker.company.companyName(), 
        cheapestDish: faker.commerce.price(),
        location:{type:'Point', coordinates:[parseFloat( faker.address.longitude()),parseFloat( faker.address.latitude())]}
        }

        allShops.push(fakeShop);
       
        
    }
    return allShops;
    
}


const mongoConnect = async () => {
  try {
    console.log('Attemp to Connect'); 
    await mongoose.connect(url, {useNewUrlParser: true});
    console.log('Connected to Mongo lab');

    
    await shopModel.create( CreateRandomShops() );

    console.log('The resturant location was created')

    await mongoose.disconnect(url);
    console.log('Disconnected from mongo lab');
  }catch (error) {
    console.log(error);
  }
}

mongoConnect();