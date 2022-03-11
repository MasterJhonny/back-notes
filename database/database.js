const { config } = require('./keys');

// import modules
const mongoose = require('mongoose');
const db = require('mongoose');

// import model database
const schemaUser = require('./model.users')
const schemaNote = require('./model.notes')


//  created model 
const ModelUser = mongoose.model('users', schemaUser);
const ModelNote = mongoose.model('notes', schemaNote);

// destructurin config
const { user, password, database } = config;

// definid uri
const URI = `mongodb+srv://${user}:${password}@${database}.8jgwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


// conected database
db.Promise = global.Promise;
db.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('database yes!!'))
.catch(err => console.error('[DATA BASE ERROR]', err))

module.exports = { db, ModelUser, ModelNote }