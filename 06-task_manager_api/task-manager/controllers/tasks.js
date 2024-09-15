// Models
const Task = require('../models/Task');
// Middlewares
const asyncWrapper = require('../middleware/async');

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
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID }).exec();
  // const task = await Task.findById(taskID);

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
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
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
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
//     return res.status(404).json({ msg: `No task with id: ${taskID}` });
//   }

//   res.status(200).json({ task });
// });
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
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
