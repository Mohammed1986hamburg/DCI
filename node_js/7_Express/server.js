const express=require('express');
const app=express(); // Server is created
const orders=require('./orders.json'); // to deal with json files
const bodyParser=require('body-parser'); // body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.//parse يعرب يفسر

//madeleware
app.use(bodyParser.json());//  to read json files and tell the all middlewares to learn json  // use: apply this middlewares to learn json to all reqs from client

//middlewares to learn json
app.use(bodyParser.urlencoded({extended:false}));// to read url with my data and tell the all middlewares to learn this, ex: https://www.google.de/search?source=hp&ei=V0qTXNnqO474wQKZxKa4DA&q=syria


//middlewares to learn json
app.get('/orders', (req, res, next)=>{  // req.url='/orders' , we can say to add event listner to client on /orders and req has all infos about client req

    next();  // go to next middlewares to learn json not next line
})


//middlewares to learn json
app.post('/orders', (req, res, next)=>{
    const dataFormUser=req.body; // req.body ????
    orders.push(dataFormUser);
    
    next();  // go to next middlewares to learn json not next line
})

app.get('/orders/:firma', (req, res, next)=>{
    const firmaName= req.params.firma; // apple, htc, ......
    const filteredByFirma=orders.filter(product => product.productsFirma.toLowerCase()===firmaName.toLowerCase());
    if(filteredByFirma.length===0) res.status(404).send('The company you set not exist!');
    else res.status(200).send(filteredByFirma);
})

app.delete('/orders/:id', (req, res, next)=>{
    const idFromUrl= req.params.id; 
    const idIndex=orders.findIndex(product => product.productId===idFromUrl);
    if(idIndex==-1)res.status(404).send(`The id:${idFromUrl} you set not exist!`);
    else{orders.splice(idIndex,1);res.status(200).send(orders);}
})

app.put('/orders/:id',(req, res, next)=>{
     const idToBeChecked=req.params.id;
     const foundProductIndex=orders.findIndex(product=> product.productId===idToBeChecked)

     if(foundProductIndex===-1){ res.status(204).send('the product with this id not found');console.log('not found');}
     else {orders[foundProductIndex]=req.body;console.log(orders[foundProductIndex]);res.status(202).send('The product was updated'); }

})


app.use('/orders',(req, res, next)=>{  

    res.status(200).send(orders)

})



app.listen(4000);
console.log('server is listing to port 4000');