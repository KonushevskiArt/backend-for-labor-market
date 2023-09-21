const Router = require('express')
const router = new Router()
const vacancyController = require('../controllers/vacancyController')
const {check} = require("express-validator")
const authMiddleware = require("../middleware/authMiddleware");


router.get('/get-all', vacancyController.getAll)
router.get('/get-one/:id', vacancyController.getOneById)
router.post('/create', authMiddleware, vacancyController.create)
router.put('/update', authMiddleware, vacancyController.updateOneById)
router.delete('/delete/:id', authMiddleware, vacancyController.removeOneById)

module.exports = router
