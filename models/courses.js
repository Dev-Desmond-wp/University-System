const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    departmentId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Department',
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    creditUnits: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const courseModel = mongoose.model('Courses', coursesSchema)

module.exports = courseModel