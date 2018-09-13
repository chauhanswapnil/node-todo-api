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

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });


  client.close();
});
