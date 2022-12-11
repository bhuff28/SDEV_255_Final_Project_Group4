//JavaScript for SDEV255 Final Project
//School website (Jivy Tek)
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connect to mongo db


//view engine
app.set('view engin', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});