// const sequelize = require("../libs/sequelize");
// const { models } = require("../libs/sequelize");

const { ModelTask } = require("../database/database");

// const boom = require("@hapi/boom");

class TaskService {
    constructor() {

    }
    async find() {
      const rta = await ModelTask.find();
      return rta;
    }
  
    async create(data) {
      const newTodo = await ModelTask.create(data);

      return { 
        create: true
      }
    }
  
    //   async find() {
    //     const rta = await models.User.findAll();
    //     return rta;
    //   }
  
    async findOne(id) {
      const tasks = await ModelTask.find({userId: id});
      if(!tasks) {
        throw new Error('Ups, user not found');
      }
      return tasks;
    }
  
    async update(id, changes) {
      const todo = await ModelTask.findByIdAndUpdate(id, changes);
      return todo;
    }
  
    async delete(id) {
      const rta = await ModelTask.findByIdAndDelete(id);
      // console.log('delete, rta!!',rta)
      return {
        delete: true,
        id,
      }
    }
}
  
  module.exports = TaskService;
  