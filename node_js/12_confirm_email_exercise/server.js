//1-   npm init -y
//2-   npm install --save express
//3-   npm install --save mongoose
//4-   npm install --save-dev morgan
//5-   npm install --save dotenv
//6-   npm install --save nodemailer
//7-   npm install --save express-validator 
//8-   npm install --save bcrypt
const express= require('express');
const app=express();
const userRoute=require('./routes/userRoute');
const morgan=require('morgan');
const errorHandler=require('./helpers/errorHandler');
const connectToMongo=require('./helpers/mongoHelpers');

connectToMongo();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',userRoute);
app.use(errorHandler);





app.listen(2000);
console.log('server is listing to port 4000');
