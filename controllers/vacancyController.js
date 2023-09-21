const Vacancy = require('../models/Vacancy')
const { validationResult } = require('express-validator')


class vacancyController {

  async create(req, res) {
    try {
      const {
        title,
        date,
        contactNumber,
        location,
        employment,
        workExperience,
        salary,
        createdBy,
        description,
        requirements
      } = req.body;
        
      const vacancy = new Vacancy({
        title,
        date,
        contactNumber,
        location,
        employment,
        workExperience,
        salary,
        createdBy,
        description,
        requirements
      })

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({message: "Ошибка при создании вакансии", errors});
      }
      await vacancy.save();
      return res.status(201).json({message: "Вакансия успешно создана"});
    } catch (e) {
      console.log(e);
      res.status(500).json({message: `Vacancy creation error - ${e}`});
    }
}

  async getAll(req, res) {
    try {
      const vacancies = await Vacancy.find();
      res.status(200).json(vacancies);
    } catch (e) {
      console.log(e);
      res.status(500).json('server error');
    }
  }

  async getOneById(req, res) {
    try {
      const id = req.params.id;
      const vacancy = await Vacancy.findOne({_id: id});
      if (vacancy) {
        res.status(200).json(vacancy);
      } else {
        res.status(400).json(`vacancy not found by id: ${id}`);
      } 
    } catch (e) {
        console.log(e)
        res.status(500).json('server error');
    }
  }

  async updateOneById(req, res) {
    try {
      const {
        title,
        date,
        contactNumber,
        location,
        employment,
        workExperience,
        salary,
        createdBy,
        description,
        requirements,
        _id,
        __v
      } = req.body;

      const updatedVacancy = {
        title,
        date,
        contactNumber,
        location,
        employment,
        workExperience,
        salary,
        createdBy,
        description,
        requirements,
        _id,
        __v
      }

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
          return res.status(400).json({message: "Ошибка при обновлении вакансии", errors})
      }
        await Vacancy.updateOne({_id}, updatedVacancy);
        res.status(200).json('updated successfully');
    } catch (e) {
        console.log(e)
    }
  }

  async removeOneById(req, res) {
    try {
      const id = req.params.id;
      await Vacancy.deleteOne({_id: id});
      res.status(204).json('deleted successfully');
    } catch (e) {
      res.status(400).json(`vacancy not found`);
    }
  }
}

module.exports = new vacancyController()