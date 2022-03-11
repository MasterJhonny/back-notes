// const sequelize = require("../libs/sequelize");
// const { models } = require("../libs/sequelize");

// const boom = require("@hapi/boom");

class UserService {
  constructor() {
    this.data = [];
  }


  // async find() {
  //   const data = await pool.query('SELECT * FROM users;');
  //   return data;
  // }

  //   async create(data) {
  //     const newUser = await models.User.create(data);
  //     return newUser;
  //   }

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

  //   async update(id, changes) {
  //     const user = await this.findOne(id);
  //     const rta = await user.update(changes);
  //     return rta;
  //   }

  //   async delete(id) {
  //     const user = await this.findOne(id);
  //     await user.destroy();
  //     return {
  //       delete: true,
  //     }
  //   }
}

module.exports = UserService;
