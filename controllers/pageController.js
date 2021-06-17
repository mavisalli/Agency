const Project = require('../models/Project');  


exports.getIndexPage = async (req, res) => {

    const projects = await Project.find({}).sort("-createdAt");
  
    res.status(200).render('index',{
      projects
    });
  };



