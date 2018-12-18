const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c1927cb3f919cfd0cf66701')
  // }, {
  //   $set: {
  //     completed: true,
  //     text: 'wash dishes'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5c1918d4d1b66d1ea4f8aaca')
    },{
      $set: {name: 'Mark'},
      $inc: {age: 1}
    },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    // client.close();
});
