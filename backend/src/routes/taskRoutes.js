const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');
router.route('/').get(protect, getTasks).post(protect, createTask);
module.exports = router;