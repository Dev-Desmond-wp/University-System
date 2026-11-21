const router = require('express').Router()

const { selectDepartment, getallDepartment, getoneDepartment, updateDepartment, deleteDepartment } = require('../controller/department')

const { validateDepartment } = require('../middleware/departmentValidation')

router.post('/newdepartment', validateDepartment, selectDepartment)

router.get('/alldepartment', getallDepartment)

router.get('/onedepartment/:id', getoneDepartment)

router.patch('/updatedepartment/:id', updateDepartment)

router.delete('/deletedepartment/:id', deleteDepartment)

module.exports = router