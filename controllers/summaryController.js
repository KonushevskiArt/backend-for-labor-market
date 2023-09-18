const Summary = require('../models/Summary')
const { validationResult } = require('express-validator')


class summaryController {

  async create(req, res) {
    try {
        const {
          name, 
          surname,
          contactNumber,
          birthDate,
          location,
          targetVacancy,
          employment,
          workExperience,
          expectedSalary,
          createdBy,
        } = req.body;
        
        const summary = new Summary({
          name, 
          surname,
          contactNumber,
          birthDate,
          location,
          targetVacancy,
          employment,
          workExperience,
          expectedSalary,
          createdBy,
        })
        
        await summary.save()
        return res.json({message: "Резюме успешно создано"})
    } catch (e) {
        console.log(e);
        res.status(400).json({message: `Vacancy creation error - ${e}`})
    }
}

  async getAll(req, res) {
      try {
          const summaries = await Summary.find()
          res.json(summaries)
      } catch (e) {
          console.log(e)
      }
  }

  async getOneById(req, res) {
    try {
      const {id} = req.body;
      const summary = await Summary.findOne({id})
      if (summary) {
        res.json(summary)
      } else {
        res.status(400).res.json(`vacancy not found by id: ${id}`)
      } 
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
        // const summaries = await Summary.find()
        // res.json(summaries)
    } catch (e) {
        console.log(e)
    }
  }

  async removeOneById(req, res) {
    try {
        // const summaries = await Summary.find()
        // res.json(summaries)
    } catch (e) {
        console.log(e)
    }
  }
}

module.exports = new summaryController()