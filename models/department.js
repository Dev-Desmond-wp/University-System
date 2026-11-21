const mongoose = require('mongoose')

const departmentSchema =  new mongoose.Schema({
    departmentName: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Courses'
    }]
}, {
    timestamps: true
});

const departmentModel = mongoose.model('Department', departmentSchema);

module.exports = departmentModel