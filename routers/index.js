const express = require('express');

const usersRouter = require('./router.users');
const tasksRouter = require('./router.tasks');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/tasks', tasksRouter);
}

module.exports = routerApi;
