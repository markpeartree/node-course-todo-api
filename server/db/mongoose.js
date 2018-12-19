var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://markpeartree:P@55w0rd@ds139614.mlab.com:39614/todoapp', { useNewUrlParser: true });

module.exports = {
  mongoose
};
