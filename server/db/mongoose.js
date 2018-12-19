var mongoose = require('mongoose');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://markpeartree:Pa55w0rd@ds139614.mlab.com:39614/todoapp'
}

mongoose.Promise = global.Promise;
mongoose.connect(db.mlab || db.localhost);

module.exports = {
  mongoose
};
