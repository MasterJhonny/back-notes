const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaUser = new Schema({
    name: {
        type: String,
        require: true    
    },
    password: {
        type: String,
        require: true
    }
})


module.exports = schemaUser;