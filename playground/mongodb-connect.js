const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log(err);
  }


  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    id:1, name: 'buy food'
  },(err, result)=>{
    if(err){
      return console.log(err);
    }
    console.log(JSON.stringify(result.ops));
  });

  db.collection('Users').insertOne({
    name:'Evgeniy',age:45, location:'ua'
  },(err, result)=>{
    if(err){
      return console.log('Could not create a new user');
    }
    console.log(JSON.stringify(result.ops));
  });
  client.close();
});
