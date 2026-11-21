const courseModel = require('../models/courses')
const departmentModel = require('../models/department')

exports.selectCourse = async (req, res) => {
    try {
        const { departmentId } = req.params;
        const { courseCode, title, creditUnits } = req.body;

        const DEPART = await departmentModel.findById(departmentId);

        if (!DEPART) {
            return res.status(400).json({
                message: 'The department you selected does not exists'
            });
        }

        const newcourse = new courseModel({
            courseCode,
            title,
            creditUnits,
            departmentId
        });

        DEPART.courses.push(newcourse._id);

        await newcourse.save();
        await DEPART.save();

        return res.status(201).json({
            message: 'Course selected successfully',
            data: newcourse
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


exports.getallCourses = async (req,res) => {
    try {
        const course = await courseModel.find()

        res.status(200).json({
            message: `All department found and the total is: ${course.length}`,
            data: course
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getoneCourse = async (req, res) => {
    try {
        const { id } = req.params
        const course = await courseModel.findById(id).populate('departmentId');

        if(!course) {
            return res.status(404).json({
                message: 'Course not found'
            })
        }

        res.status(200).json({
            message: 'Course found',
            data: course
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params
        const { courseCode, title, creditUnits } = req.body
        const course = await courseModel.findById(id);

        if(!course) {
            return res.status(404).json({
                message: 'Course not found'
            })
        }

        const data = {
            courseCode,
            title,
            creditUnits
        }

        const updatedCourse = await courseModel.findByIdAndUpdate(id, data, { new: true})

        res.status(200).json({
            message: 'Course updated successfully',
            data: updatedCourse
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params
        const course = await courseModel.findByIdAndDelete(id)

        if(!course) {
            return res.status(404).json({
                message: 'Course not found'
            })
        }

        res.status(200).json({
            message: 'Course deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}