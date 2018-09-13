//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
  if (error)
  {
    return console.log('Unable to Connect To MongoDb Server');
  }
  console.log('Connected to MonogoDb');
  const db = client.db('TodoApp')

  // db.collection('Todos').find({ completed: true }).toArray().then((docs) => {
  //
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   if (err)
  //   {
  //     return console.log('Unable to fetch Todos', err);
  //   }
  // });

  // db.collection('Todos').find({completed: false }).count().then((count) => {
  //
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   if (err)
  //   {
  //     return console.log('Unable to fetch Todos', err);
  //   }
  // });

  db.collection('Users').find({ age: 19}).toArray().then((docs) => {

    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    if (err)
    {
      return console.log('Unable to fetch Todos', err);
    }
  });

  client.close();
});
