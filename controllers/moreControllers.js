const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.home_get = (req, res) => {
    res.render('home');
}

module.exports.view_courses_get = (req, res) => {
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.render('view_courses');
}
