var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema
const teamSchema = new Schema({
    name: String,
    stadium: String,
    size: Number
});

// Create a model from the schema
const Team = mongoose.model('Teams', teamSchema);

module.exports = Team;