const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      title: req.body.title,
      subtitle: req.body.subtitle,
      description: req.body.description,
      client: req.body.client
    });

    res.status(201).redirect("/");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
