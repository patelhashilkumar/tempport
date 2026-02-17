const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: String,
    description: String,
    tech: [String],
    github: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
