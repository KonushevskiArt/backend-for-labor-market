const Router = require('express')
const router = new Router()
const summaryController = require('../controllers/summaryController')
const {check} = require("express-validator")
const authMiddleware = require("../middleware/authMiddleware");


router.get('/get-all', summaryController.getAll)
router.get('/get-one/:id', summaryController.getOneById)
router.post('/create', authMiddleware, summaryController.create)
router.put('/update', authMiddleware, summaryController.updateOneById)
router.delete('/delete/:id', authMiddleware, summaryController.removeOneById)

module.exports = router
