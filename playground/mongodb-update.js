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

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b9a1ffb402398269576df08')
    },
    {
      $set: {
        completed: true
      }
    },
    {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })

  client.close();
});
