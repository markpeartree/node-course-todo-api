const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {users} = require('./../server/models/user');

// var id = '5c1a5622a7c48e21e84cb723';
//
If (!ObjectID.isValid(id)) {
  console.log('id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
//   }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("id not found");
//   }
// console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var idUser = '5c1a2e2932b7cd2e706eaead'
users.findById(idUser).then((toast) => {
  if (!toast) {
    return console.log("id not found");
  }
  console.log('user by id', toast);
}).catch((e) => console.log(e));
