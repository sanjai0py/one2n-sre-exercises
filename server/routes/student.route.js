const express = require('express')
const router = express.Router()
const {createStudent, getAllStudents, getStudent, updateStudent, deleteStudent} = require('../controllers/student.controller')

router.get('/new-student', createStudent)
router.get('/all-students', getAllStudents)
// router.get('/student/:id', getStudent)
// router.put('/student/:id', updateStudent)
// router.delete('/student/:id', deleteStudent)

module.exports = router