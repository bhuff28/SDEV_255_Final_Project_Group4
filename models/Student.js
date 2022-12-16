const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
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
        required: [true, 'you need a student id'],
    },
    gpa: {
        type: Number,
        required: [true, 'must have current gpa'],
    }
});

const Student = mongoose.model('student', studentSchema);




module.exports = Student;