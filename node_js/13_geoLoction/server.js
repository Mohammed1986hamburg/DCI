//1-   npm init -y
//2-   npm install --save express
//3-   npm install --save mongoose
//4-   npm install --save-dev morgan
//5-   npm install --save dotenv
//6-   npm install --save nodemailer//
//7-   npm install --save express-validator //
//8-   npm install --save bcrypt//

//for map
//9 npm install --save-dev faker            // faker data

// for upload file
//10   npm i multer
const express= require('express');
const app=express();
const userRoute=require('./routes/userRoute');
//const morgan=require('morgan');
const errorHandler=require('./helpers/errorHandler');
const connectToMongo=require('./helpers/mongoHelpers');
const imageRouter=require('./routes/imageRouter')


const multer = require('multer');  // for uplead file
const storage= multer.diskStorage({destination:'./browser/uploadedImage'});
const upload=multer({storage: storage})

connectToMongo();

//app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('browser')); // home page in the project , must to be index.html

app.use('/shops',userRoute);
app.use('/images', upload.single('profile'),imageRouter)
app.use(errorHandler);





app.listen(4000);
console.log('server is listing to port 4000');
