const express = require('express');
const app = express();
const bodyParser = require('body-parser');

global.mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/car-store');
app.use(bodyParser.json());

//Serve frontend files
app.use(express.static('../client/'));


const AccessManager = require('access-manager');
const accessManager = new AccessManager({
  mongoose: mongoose, // mongoose (connected)
  expressApp: app, // an express app
  sessionSchema: {
    loggedIn: {type:Boolean, default:false},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
  },
  userSchema: {
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    roles: [String],
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
  }
});

// Models //
global.Cart = require('./models/cart.js');
const User = accessManager.models.user;

// Middleware //
const CartMiddleware = require('./middlewares/cart-middleware.js');
app.use(CartMiddleware);

// Routes //
app.get('/', (req,res)=>{

});
// REST routes
app.get('/rest/products', async(req, res)=>{
    //res.send('We are products');
   // let products = await Product.find();
    //res.json(products);
    
});


app.listen('3000', ()=>{
    console.log('The car store server is running on port 3000');
});