// Models
const Task = require('../models/Task');
// Middlewares
const asyncWrapper = require('../middleware/async');
// Custom errors
const { createCustomError } = require('../errors/custom-error');

// Get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({ tasks });
  // Other types of response
  // res.status(200).json({ tasks, amount: tasks.length });
  // res
  // .status(200)
  // .json({ success: true, data: { tasks, nbHits: tasks.length } });
  // .json({ status: 'success', data: { tasks, nbHits: tasks.length } });
});
// Create task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json({ task });
});
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID }).exec();
  // const task = await Task.findById(taskID);

  if (!task) {
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
    // const error = new Error('Not Found');
    // error.status = 404;
    // return next(error);
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }

  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }

  res.status(200).json({ task });
});
// const editTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//     new: true,
//     runValidators: true,
//     // overwrite: true, // Old version option (Not exist in v8.*)
//   });

//   if (!task) {
//     // return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     return next(createCustomError(`No task with id: ${taskID}`, 404));
//   }

//   res.status(200).json({ task });
// });
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
  // res.status(200).send();
  // res.status(200).json({ task: null, status: 'success' });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // editTask,
};
