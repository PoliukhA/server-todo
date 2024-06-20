const Router = require('express');
const userRouter = require('./user');
const taskRouter = require('./task');

const router = Router();

// http://localhost:5000/api/users
router.use('/users', userRouter);
// http://localhost:5000/api/tasks
router.use('/tasks', taskRouter);

module.exports = router;