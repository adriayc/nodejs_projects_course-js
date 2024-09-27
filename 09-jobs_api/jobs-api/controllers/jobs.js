const { StatusCodes } = require('http-status-codes');
// Models
const Job = require('../models/Job');
// Errors
const { NotFoundError } = require('../errors');

const getAllJobs = async (req, res) => {
  console.log(req.user.userId);

  // const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');
  const jobs = await Job.find({ createdBy: req.user.userId });
  // console.log(jobs);
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({ _id: jobId, createdBy: userId });
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
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
