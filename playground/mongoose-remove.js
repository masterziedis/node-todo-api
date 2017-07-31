const {
  ObjectId
} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({
  _id: '597f2d1e17477ec3c0f9e2d5'
}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('597f2d1e17477ec3c0f9e2d5').then((todo) => {
  console.log(todo);
});
