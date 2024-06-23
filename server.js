const express = require('express');
const dotenv=require('dotenv') //bata3at al env file aly fii al port wal db url
dotenv.config({path:'config.env'}) //load enviroment package man al config.env
const morgan=require('morgan') //al morgan dii bat3at al midlleware
const mongoose = require('mongoose');   // for the db
const {connectToMongoDB} =require('./config/mongo'); //db connection from folder config file mongo
const globalError = require('./middleware/errorMiddleware');//middleware globel error
var methodOverride = require('method-override')//dah 3ashn al delete man al database
const path = require('path'); // Ensure path module is required
const app=express(); //express instance
const Chatter = require('./Chatter');
var moment = require('moment'); //al time stamp handlation wii al format fal ejs
app.use(express.urlencoded({ extended: true }));//3ashan al handling maban al front wal db
app.use(express.static('public'));//accesing the static files js and css
app.use(methodOverride('_method'))//3ashan al delete wal update

//require databaseschema 
//bansta5dam al 2asamy dii lama ban3amal new obj ex new userModel
const userModel=require('./models/userModel');
const productModel=require('./models/productModel');
const orderModel=require('./models/orderModel');
const chatModel=require('./models/chat');

app.use(express.json());
app.set('view engine','ejs');

//Routes
const userRoute = require('./routes/userRoutes');
const productRoute = require('./routes/productRoutes');
const shoppingRoute=require('./routes/shoppingRoutes')
const orderRoutes = require('./routes/orderRoutes');
//domain name
const domainName = 'qjv19z68-8080.euw.devtunnels.ms';
//db connection
connectToMongoDB();





//get
app.get('/Home',(req,res)=>{
  res.render('Home', { domainName: domainName });
});
app.get('/HomeP',(req,res)=>{
  res.render('HomeP',{ domainName: domainName });
});
app.get('/HomeR',(req,res)=>{
  res.render('HomeR', { domainName: domainName });
});
app.get('/HomeT',(req,res)=>{
  res.render('HomeT', { domainName: domainName });
});


// Global error handling middleware handling error for express aly rag3a man asyncHandler mawgoda fii folder middleware
app.use(globalError)

//handling lal errors aly mash rag3a man express
process.on('unhandledRejection', (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
    process.exit(1);
});





const bodyparser=require("body-parser");
const favicon = require('serve-favicon');
const session = require("express-session");
const http = require('http');
const {v4:uuidv4} =require("uuid");
const WebSocket = require('ws');
const port = process.env.PORT || 8080;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
//
app.use('/static',express.static(path.join(__dirname,'public')));
app.use(session({
  secret:uuidv4(),
  resave:false,
  saveUninitialized:true
  //default
}));

app.post('/login',(req,res)=>{
 
  console.log("Login request recieved");
let Username = req.body.username;
let Password = req.body.password;
//search database

let userID= '1';
var responseData = {
  'userID' : userID
  
};

res.setHeader('Content-Type', 'application/json');
res.status(200);
res.json(responseData);
});

const faviconPath = path.join(__dirname, 'public', 'images.ico');
//icon path
const chatHandler = new Chatter(app);
app.use(favicon(faviconPath));
app.get('/',(req,res)=>{

  res.render('login', { domainName: domainName });
});

app.get('/SignUp',(req,res)=>{
  res.render('signup');
});

app.get('/about',(req,res)=>{
  res.render('about page');
});

app.get('/CustomerService',(req,res)=>{
  
  res.render('CustomerService');
});

app.get('/AdminOrder',(req,res)=>{
  
  res.render('AdminOrder');
});


app.get('/account',(req,res)=>{
  
  res.render('account', { domainName: domainName });
});

app.get('/change_address',(req,res)=>{
  
  res.render('change_address', { domainName: domainName });
});

app.get('/clogs',(req,res)=>{
  
  res.render('clogs', { domainName: domainName });
});

app.get('/flats',(req,res)=>{
  
  res.render('flats', { domainName: domainName });
});

app.get('/mules',(req,res)=>{
  
  res.render('mules', { domainName: domainName });
});




app.get('/sandals',(req,res)=>{
  
  res.render('sandals', { domainName: domainName });
});

app.get('/shoes',(req,res)=>{
  
  res.render('shoes', { domainName: domainName });
});

app.get('/SummerSlippers',(req,res)=>{
  
  res.render('SummerSlippers', { domainName: domainName });
});


const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

server.listen(port, ()=>{
  console.log("Listening to server on http://localhost:8080");
});

wss.on('open', (ws) => {
  console.log('Realtime communication established');
  //adding some functions later
});


app.post('/createAccount',(req,res)=>{
 
  console.log("Sign UP request recieved");

//search database for similarities if nothing found add the account

});


//using routes
app.use( userRoute); 
app.use( productRoute); 
app.use( shoppingRoute);  
app.use(orderRoutes);
