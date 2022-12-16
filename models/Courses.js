const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'the course needs a name'],
    },
    id: {
        type: String,
        unique: true,
        required: [true, 'the course needs a name'],
    },
    credits: {
        type: Number,
        required: [true, 'the course needs number of credits'],
    }
});

const Course = mongoose.model('course', courseSchema);




module.exports = Course;