const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const projectData = await Project.findAll();
      res.status(200).json(projectData);
    } catch (error) {
      res.status(500).json(err);
    }
  });