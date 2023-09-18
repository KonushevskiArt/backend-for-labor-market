const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const {check} = require("express-validator")


router.post('/signup', [
    check('username', "Имя пользователя не может быть пустым и не должно превышать 50 символов").isLength({min:1, max:50}),
    check('email', "Email не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 20 и меньше 6 символов").isLength({min:4, max:20})
], controller.signUp)
router.post('/login', controller.login)

module.exports = router
