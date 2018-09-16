var mongoose = require('mongoose');
var uri = "mongodb://swapstar:M0U20Skqnwdwpe7F@ds121382.mlab.com:21382/todoappswapstar"

mongoose.Promise = global.Promise;
mongoose.connect(uri || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {
  mongoose
};
