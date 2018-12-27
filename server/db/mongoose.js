var mongoose = require('mongoose');

let db = {
  localhost: process.env.MONGODB_URI,
  mlab: 'mongodb://markpeartree:Pa55w0rd@ds139614.mlab.com:39614/todoapp'
}

mongoose.Promise = global.Promise;

if ('mongodb://localhost:27017/TodoApp' === db.localhost || 'mongodb://localhost:27017/TodoAppTest' === db.localhost) {
    mongoose.connect(db.localhost);
} else {
    mongoose.connect(db.mlab);
}

module.exports = {
  mongoose
};
