const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {users} = require('./../server/models/user');

 // Todo.remove({}).then((result) => {
 //    console.log(result);
 // });

Todo.findOneAndRemove({'__id: 5c24b3d7a98ea616e4db7adf'}).then((todo) => {

});


 Todo.findByIdAndRemove('5c24b3d7a98ea616e4db7adf').then((todo) => {
   console.log(todo);
 });
