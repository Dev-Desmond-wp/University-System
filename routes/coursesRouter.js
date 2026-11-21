const router = require('express').Router()

const { selectCourse, getallCourses, getoneCourse, updateCourse, deleteCourse } = require('../controller/courses')

const { validateCourse } = require('../middleware/courseValidation')

router.post('/newcourse/:departmentId', validateCourse, selectCourse)

router.get('/allcourse', getallCourses)

router.get('/onecourse/:id', getoneCourse)

router.patch('/updatecourse/:id', updateCourse)

router.delete('/deletecourse/:id', deleteCourse)

module.exports = router