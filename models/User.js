const {Schema, model} = require('mongoose')


const User = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    vacancies: {type: Array, required: true},
    summaries: {type: Array, required: true},
})

module.exports = model('User', User)
