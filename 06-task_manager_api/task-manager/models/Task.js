const mongoose = require('mongoose');

// Create Task Schema
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// Exports and create model
module.exports = mongoose.model('Task', TaskSchema);
