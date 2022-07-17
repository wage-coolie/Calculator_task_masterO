// import express for server
const express = require("express");
// for http request logger
const morgan = require("morgan");
// for accepting cors request
const cors = require("cors");
// for getting variables from dotenv files
const dotenv = require('dotenv');
// mongodb client
const mongoose = require("mongoose");

// importing verification function
const {verifyToken} = require('./verification.js')

// importing routes
const calculate = require("./routes/calculate.js")
const history = require("./routes/history.js")


// Initialise the express server
const app = express();

// using morgan for better logging (common profile)
app.use(morgan('common'));

// using cors - Cross Origin Resource Sharing
app.use(cors());

dotenv.config();
// connecting mongo server
mongoose.connect(process.env.DB_URL , {useNewUrlParser : true , useUnifiedTopology : true})
	.then(() => console.log('Mongo connection established to Calculator db'))
	.catch((err) => console.log(err))

// askign the app to use json parsing which comes pre-bulit in expres
app.use(express.json());
// Starting the server
app.listen(process.env.PORT || 3001,() => console.log(`we are running on ${process.env.PORT || 3001}`));

// Initialising root route
app.get('/', verifyToken,(req,res) => {
	res.end("Hello , the Calculator app is running ... ");
})

app.use('/calculate',calculate);
app.use('/history',history);




