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

  // db.collection('Todos').insertOne({
  //   text: 'Make Drawings',
  //   completed: false
  // }, (err,result) => {
  //   if (err)
  //   {
  //     return console.log('Unable to insert Todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: 'Swapnil',
    age: 19,
    location: 'Mumbai'
  },(err,result) => {
    if (err)
    {
      return console.log('Unable to insert Todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  client.close();
});
