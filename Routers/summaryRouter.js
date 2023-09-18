const Router = require('express')
const router = new Router()
const summaryController = require('../controllers/summaryController')
const {check} = require("express-validator")
const authMiddleware = require("../middleware/authMiddleware");


router.get('/get-all', summaryController.getAll)
router.get('/get-one', summaryController.getOneById)
router.post('/create', authMiddleware, summaryController.create)
router.post('/update-one', authMiddleware, summaryController.updateOneById)
router.get('/remove-one', authMiddleware, summaryController.removeOneById)

module.exports = router
