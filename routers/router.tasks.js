const express = require('express');

const TaskService = require('../services/service.tasks');
// const validatorHandler = require('./../middlewares/validator.handler');
// const { updateTodoSchema, createTodoSchema, getTodoSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new TaskService();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await service.find();
    res.status(200).json(tasks);
  } catch (error) {
    // next(error);
    console.error(error);
  }
});

// router.get('/:id',
//   validatorHandler(getTodoSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const category = await service.findOne(id);
//       res.json(category);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.post('/',
  // validatorHandler(createTodoSchema, 'body'),
  async (req, res, next) => {
    try {
      const task = req.body;
      // console.log('task new!!',task)
      const newTask = await service.create(task);
      res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
       // next(error);
    }
  }
);

router.patch('/:id',
// validatorHandler(getTodoSchema, 'params'),
// validatorHandler(updateTodoSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    console.log('note update!!', id, body);

    const updateNote = await service.update(id, body);
    res.json(updateNote);
  } catch (error) {
    console.log(error);
    // next(error);
  }
}
);

router.delete('/:id',
// validatorHandler(getTodoSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log('id for delete!!', id)

    const deletNote = await service.delete(id);
    res.status(201).json(deletNote);
  } catch (error) {
    // next(error);
    console.error(error);
  }
}
);

module.exports = router;