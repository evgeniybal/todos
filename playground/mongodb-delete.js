const {MongoClient, ObjectId} = require('mongodb');


const deleteItem = (id)=> {

  const objectId = new ObjectId(id);
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) {
        reject(err);
      }

      console.log('Connected to MongoDB server');
      const db = client.db('school');
      let criteria = {_id:objectId};

      console.log(JSON.stringify(criteria));
      return db.collection('inventory')
        .findOneAndDelete(criteria)        
        .then((docs) => {
          client.close();
          resolve(docs);
        }, (err) => {
          client.close();
          reject(err);
        });

    });
  });
};

deleteItem('5a9ea65260ff05672bbc2aa7').then((x)=>console.log(x));
module.exports={
  deleteItem
};
