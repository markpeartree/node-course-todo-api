// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: "Eat dinner"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: "Eat dinner"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Markiboy'}).then((result) => {
    console.log(result.result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c1916d73d5b5c0e2047b664')}).then((result) => {
    console.log(result);
  });

    // client.close();
});
