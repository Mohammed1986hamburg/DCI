const mongoose=require('mongoose');



const shopSchema=new mongoose.Schema({ 
  name: {type: String, required: true, trim: true},
  cheapestDish: {type: Number, min:0},
  location: {type: mongoose.Mixed,required: true, index: '2dsphere'}
} ,{versionKey: false})

module.exports=shopSchema;



// '2dsphere'   to ge geoloctin info and calcilation
// mongoose.Mixed is mix of data types in object
// mongoose.Mixed  will be as {type:'Point', coordinates:[parseFloat( faker.address.longitude()),parseFloat( faker.address.latitude())]}