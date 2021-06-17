const express = require('express');

const pageController = require('../controllers/pageController');
const projectController = require('../controllers/projectController');

const router = express.Router();

//Page routes
router.route('/').get(pageController.getIndexPage);
router.route('/').post(projectController.createProject);




module.exports = router;