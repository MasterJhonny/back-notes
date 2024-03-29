const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const schemaTask = new Schema({
    title: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true,
    },
    time: {
        type: String,
        require: true,
    },
    days: {
        type: Array,
        require: true,
    },
    color: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})


module.exports = schemaTask;