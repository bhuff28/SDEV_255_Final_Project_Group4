//JavaScript for SDEV255 Final Project
//School website (Jivy Tek)
// const express = require('express');
// const { ObjectId } = require('mongodb');
// const { connectToDb, getDb } = require('./db');


// const app = express();

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');

// database connection
mongoose.set('strictQuery', true);
const dbURI = 'mongodb+srv://JoBaRy:JoBaRy@coursesdb.yxu9i8s.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    //, useCreateIndex: true 
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/view_courses', requireAuth, (req, res) => res.render('view_courses'));
app.use(authRoutes);