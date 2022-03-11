const express = require('express');

const NoteService = require('../services/service.notes');
// const validatorHandler = require('./../middlewares/validator.handler');
// const { updateTodoSchema, createTodoSchema, getTodoSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new NoteService();

router.get('/', async (req, res, next) => {
  try {
    const todos = await service.find();
    res.json(todos);
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
      const note = req.body;
      console.log('note new!!',note)
      const newNote = await service.create(note);
      res.status(201).json(newNote);
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