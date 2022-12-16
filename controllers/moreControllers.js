const Courses = require('../models/Courses');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

module.exports.home_get = (req, res) => {
    res.render('home');
}

module.exports.view_courses_get = (req, res) => {
    // res.send();
    res.render('view_courses');
    // let name = Courses.name;
    // let id = Courses.id;
    // console.log(name + id);


}

module.exports.teacher_get = (req, res) => {
    res.render('teacher');
}

module.exports.student_get = (req, res) => {
    res.render('student');
}

module.exports.edit_courses_get = (req, res) => {
    res.render('edit_courses');
}

module.exports.edit_courses_post = async (req, res) => {
    res.send('post to edit course is working')
}
