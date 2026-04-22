const Task = require('../models/taskModel');
const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
};
const createTask = async (req, res) => {
  const task = await Task.create({ title: req.body.title, description: req.body.description, user: req.user.id });
  res.status(201).json(task);
};
module.exports = { getTasks, createTask };