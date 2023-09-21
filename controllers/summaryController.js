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

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
          return res.status(400).json({message: "Ошибка при создании резюме", errors})
      }
      await summary.save()
      return res.status(201).json({message: "Резюме успешно создано"})
    } catch (e) {
      console.log(e);
      res.status(500).json({message: `Vacancy creation error - ${e}`})
    }
}

  async getAll(req, res) {
    try {
      const summaries = await Summary.find();
      res.status(200).json(summaries);
    } catch (e) {
      console.log(e);
      res.status(500).json('server error');
    }
  }

  async getOneById(req, res) {
    try {
      const id = req.params.id;
      const summary = await Summary.findOne({_id: id});
      if (summary) {
        res.status(200).json(summary);
      } else {
        res.status(400).json(`summary not found by id: ${id}`);
      } 
    } catch (e) {
        console.log(e)
        res.status(500).json('server error');
    }
  }

  async updateOneById(req, res) {
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
        _id,
        __v
      } = req.body;

      const updatedSummary = {
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
        _id,
        __v
      }

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
          return res.status(400).json({message: "Ошибка при обновлении резюме", errors})
      }
        await Summary.updateOne({_id}, updatedSummary);
        res.status(200).json('updated successfully');
    } catch (e) {
        console.log(e)
    }
  }

  async removeOneById(req, res) {
    try {
      const id = req.params.id;
      await Summary.deleteOne({_id: id});
      res.status(204).json('deleted successfully');
    } catch (e) {
      res.status(400).json(`summary not found`);
    }
  }
}

module.exports = new summaryController()