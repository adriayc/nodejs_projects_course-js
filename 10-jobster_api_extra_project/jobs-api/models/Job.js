const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      maxLength: 50,
      required: [true, 'Please provide company name'],
    },
    position: {
      type: String,
      maxLength: 100,
      required: [true, 'Please provide position'],
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      // User objectId (Mongoose)
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'My city',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Job', JobSchema);
