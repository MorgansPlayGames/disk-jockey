const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({

    courseName: {
        type: String,
        trim: true,
    },

    holes: [{
        type: Number
    }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = User;
