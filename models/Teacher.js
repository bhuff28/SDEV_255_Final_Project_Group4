const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const teacherSchema = new mongoose.Schema({
    Lname: {
        type: String,
        required: [true, 'You must have a last name'],
    },
    Fname: {
        type: String,
        required: [true, 'You must have a first name'],
    },
    id: {
        type: String,
        unique: true,
        required: [true, 'you need an id'],
    },
    courses: {
        type: Array,
        required: [true, 'you need courses you teach'],
    }
});

const Teacher = mongoose.model('teacher', teacherSchema);




module.exports = Teacher;