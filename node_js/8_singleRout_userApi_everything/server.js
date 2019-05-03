//1-   npm init -y
//2-   npm install --save express
//3-   npm install --save mongoose
//4- npm install --save-dev morgan

const express=require("express");
const app=express();
const userRoute= require(`./routes/userRoute`);
const morgan = require('morgan');// to print on terminal for every request
const errorHandler=require('./helpers/errorHandler');
const connectToMongo=require('./helpers/mongoHelpers');



connectToMongo();


app.use(morgan('dev'));
app.use(express.json());// to handell json because express can not handell alone
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.use('/users', userRoute);




// apply error handler
app.use(errorHandler);



app.listen(4000);
console.log('server is listing to port 4000');


