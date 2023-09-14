const {Schema, model} = require('mongoose')

const Vacancy = new Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
    employment: {type: String, required: true},
    description: {type: Array, required: true},
    workExperience : {type: Number, required: true},
    requirements: {type: Array, required: true},
    contactNumber: {type: String, required: true},
    location: {type: Object, required: true},
    salary: {type: Object, required: true},
    createdBy: {type: String, required: true},
})

module.exports = model('Vacancy', Vacancy)
