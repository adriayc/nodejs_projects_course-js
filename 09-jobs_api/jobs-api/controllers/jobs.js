const { StatusCodes } = require('http-status-codes');
// Models
const Job = require('../models/Job');
// Errors

const getAllJobs = async (req, res) => {
  res.send('Get all jobs');
};
const getJob = async (req, res) => {
  res.send('Get single job');
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const updateJob = async (req, res) => {
  res.send('Update job');
};
const deleteJob = async (req, res) => {
  res.send('Delete job');
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
