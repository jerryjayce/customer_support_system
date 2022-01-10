
"use strict"

const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
let MainRoute =  require('./routes/MainRoute');
let sendResponse = require('./helpers/ResponseHelper').sendResponse;


app.use(cors());
app.options('*', cors());

// MiddleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());

// starting the app
const port = 9900;
app.listen(port);
console.log('app is running on port', port);

//connection to routes
app.get('/', (req, res) => {
    res.send('Welcome');
});



app.use('/', MainRoute);

// Handle 404
app.use(function (req, res) {
    sendResponse(res, 404);
});


//Handle Server Error
app.use(function (error, req, res, next) {
    console.log(error)
    sendResponse(res, 500);
})

module.exports = app;