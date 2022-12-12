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
const dbURI = 'mongodb+srv://JoBaRy:JoBaRy@coursesdb.yxu9i8s.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    //, useCreateIndex: true 
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/view_course', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);

// // db connection
// let db
// connectToDb((err) => {
//     if (!err) {
//         app.listen(3000, () => {
//             console.log('app listening on port 3000')
//         });
//         db = getDb()
//     }
// })


// //routes
// app.get('/view_courses', (req, res) => {
//     let courses = []
//     db.collection('courses')
//         .find()
//         .forEach(course => courses.push(course))
//         .then(() => {
//             res.status(200).json(courses)
//         })
//         .catch(() => {
//             res.status(500).json({ error: 'could not fetch the documents' })
//         })
// });

// app.get('/courses/:id', (req, res) => {

//     if (ObjectId.isValid(req.params.id)) {
//         db.collection('courses')
//             .findOne({ _id: ObjectId(req.params.id) })
//             .then(doc => {
//                 res.status(200).jason(doc)
//             })
//             .catch(err => {
//                 res.status(500).json({ error: 'could not fetch the documents' })
//             })
//     }
//     else {
//         res.status(500).json({ error: 'not valid doc id' })
//     }

// })




//fist attempt


// //connect to mongo db
// const dbURI = 'mongodb+srv://JoBaRy:JoBaRy@coursesdb.yxu9i8s.mongodb.net/JoBaRy?retryWrites=true&w=majority';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => app.listen(3000)) //result => app.listen(3000) || console.log("database connected
//     .catch(err => console.log(err));


// //view engine
// app.set('view engin', 'ejs');

// //middleware and static files
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use((req, res, next) => {
//     res.locals.path = req.path;
//     next();
// });