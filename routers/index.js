const express = require('express');

const usersRouter = require('./router.users');
const notesRouter = require('./router.notes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/notes', notesRouter);
}

module.exports = routerApi;
