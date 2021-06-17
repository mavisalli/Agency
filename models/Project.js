const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ProjectSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    subtitle: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    client: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }  
});
   
const Project = mongoose.model("Project", ProjectSchema);
  
module.exports = Project;