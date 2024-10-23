const mongoose = require('mongoose');

// Create Task Schema
const TaskSchema = new mongoose.Schema({
  // Property validations
  name: {
    type: String,
    trim: true,
    maxLength: [20, 'Name can not be more than 20 characters'],
    required: [true, 'Must provide name'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Exports and create model
module.exports = mongoose.model('Task', TaskSchema);
