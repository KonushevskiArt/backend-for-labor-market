const {Schema, model} = require('mongoose')

const Summary = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    contactNumber: {type: String, required: true},
    birthDate: {type: String, required: true},
    location: {type: String, required: true},
    targetVacancy: {type: String, required: true},
    employment: {type: String, required: true},
    workExperience : {type: Array, required: true},
    expectedSalary: {type: Object, required: true},
    createdBy: {type: String, required: true},
})

module.exports = model('Summary', Summary)

