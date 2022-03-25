const { config } = require('./keys');

// import modules
const mongoose = require('mongoose');
const db = require('mongoose');

// import model database
const schemaUser = require('./model.users')
const schemaTask = require('./model.tasks')


//  created model 
const ModelUser = mongoose.model('users', schemaUser);
const ModelTask = mongoose.model('tasks', schemaTask);

// destructurin config
const { user, password, database } = config;

// definid uri
const URI = `mongodb+srv://${user}:${password}@${database}.epzrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


// conected database
db.Promise = global.Promise;
db.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('database yes!!'))
.catch(err => console.error('[DATA BASE ERROR]', err))

module.exports = { db, ModelUser, ModelTask }