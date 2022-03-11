const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const schemaNote = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        require: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})


module.exports = schemaNote;