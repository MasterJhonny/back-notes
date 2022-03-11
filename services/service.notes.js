// const sequelize = require("../libs/sequelize");
// const { models } = require("../libs/sequelize");

const { ModelNote } = require("../database/database");

// const boom = require("@hapi/boom");

class NoteService {
    constructor() {

    }
    async find() {
      const rta = await ModelNote.find();
      return rta;
    }
  
    async create(data) {
      const newTodo = await ModelNote.create(data)
      return { 
        create: true
      }
    }
  
    //   async find() {
    //     const rta = await models.User.findAll();
    //     return rta;
    //   }
  
    //   async findOne(id) {
    //     const user = await models.User.findByPk(id);
    //     if(!user){
    //       throw boom.notFound('Ups, user not found');
    //     }
    //     return user;
    //   }
  
    async update(id, changes) {
      const todo = await ModelNote.findByIdAndUpdate(id, changes);
      return todo;
    }
  
    async delete(id) {
      const rta = await ModelNote.findByIdAndDelete(id);
      console.log('delete, rta!!',rta)
      return {
        delete: true,
        id,
      }
    }
}
  
  module.exports = NoteService;
  