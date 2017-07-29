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

// var id = '597c74c641e9ad01e886206611';
//
// if (!ObjectId.isValid(id)) {
//   console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5979ddd82653d51940168ada').then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User:', user);
}).catch((e) => console.log(e))
