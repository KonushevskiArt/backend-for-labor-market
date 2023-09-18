const Vacancy = require('../models/Vacancy')
const { validationResult } = require('express-validator')


class vacancyController {

  async getAll(req, res) {
      try {
          const vacancies = await Vacancy.find()
          res.json(vacancies)
      } catch (e) {
          console.log(e)
      }
  }

  async getOneById(req, res) {
    try {
        // const summaries = await Vacancy.find()
        // res.json(summaries)
    } catch (e) {
        console.log(e)
    }
  }

  async updateOneById(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
          return res.status(400).json({message: "Ошибка при обновлении резюме", errors})
      }
        // const summaries = await Vacancy.find()
        // res.json(summaries)
    } catch (e) {
        console.log(e)
    }
  }

  async removeOneById(req, res) {
    try {
        // const summaries = await Vacancy.find()
        // res.json(summaries)
    } catch (e) {
        console.log(e)
    }
  }
}

module.exports = new vacancyController()