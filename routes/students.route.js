const { Router } = require("express")
const { studentsControllers } = require("../controllers/student.controller") 
const router = Router()

router.get("/students", studentsControllers.getStudents)
router.post("/students", studentsControllers.createStudent)
router.delete("/students/:id", studentsControllers.deleteStudentById)
router.patch("/students/:id", studentsControllers.editStudentById)

module.exports = router