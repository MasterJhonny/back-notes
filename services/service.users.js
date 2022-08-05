const bcryptjs = require('bcryptjs');

const { ModelUser } = require("../database/database");

// const boom = require("@hapi/boom");

class UserService {
  constructor() {
    this.data = [];
  }


  async find() {
    const data = await ModelUser.find()
    return data;
  }

  async create(data) {
    const newDataUser =  {
      ...data,
      password: await bcryptjs.hash(data.password, 10)
    }

    const newUser = await ModelUser.create(newDataUser);

    return newUser._id;
  }

  async login(data) {
    const rta = await ModelUser.findOne({email: data.email});
    if (rta === null) {
      console.log('valor rta', rta);
      return {
        auth: false
      }
    } else {
      // this section validation
      const compare = await bcryptjs.compare(data.password, rta.password);
      if (compare) {
        console.log('valor login', compare, rta);
        
        const id = rta._id;

        return {
          id,
          auth: compare
        }
      } else {
        console.log('valor login', compare, rta);
        return {
          auth: compare
        }
      }

    }


  }

  //   async find() {
  //     const rta = await models.User.findAll();
  //     return rta;
  //   }

  async findOne(id) {
    const user = await ModelUser.findById(id);
    if(!user){
      throw new Error('Ups, user not found');
    }
    const {_id, name, avatar } = user;
    return {
      id: _id,
      name,
      avatar
    };
  }

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
