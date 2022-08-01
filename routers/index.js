const express = require('express');

const usersRouter = require('./router.users');
const tasksRouter = require('./router.tasks');
const modletRouter = require('./router.modle');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/tasks', tasksRouter);
  router.use('/modle', modletRouter);

}

module.exports = routerApi;
