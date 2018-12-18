// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var sgTodo = {
  text: 'This is something to do',
  completed: false
};

var user = {
  name: 'Markiboy',
  age: 24,
  location: 'Bristol'
};

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne(sgTodo, (err, result) => {
  //   if (err) {
  //     console.log('unable to insert todo', err);
  //   }else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  //     client.close();
  // });

  // db.collection('Users').insertOne(user, (err, result) => {
  //   if (err) {
  //     console.log('unable to insert todo', err);
  //   } else {
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  //   client.close();
  // });


});
