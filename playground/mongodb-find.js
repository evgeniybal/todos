const MongoClient = require('mongodb').MongoClient;

const getZipCodesAsync = (name) => {

  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
      if (err) {
        reject(err);
      }

      console.log('Connected to MongoDB server');
      const db = client.db('TodoApp');
      let criteria = {};
      console.log(name);
      if (name) {
        criteria = {
          city: new RegExp(name)
        };
      }
      console.log(JSON.stringify(criteria));
      return db.collection('ZipCodes')
        .find(criteria)
        .limit(25)
        .toArray()
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


const getZipCodesAsync2 = (name) => {

  return MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
      console.log('Connected to MongoDB server');
      const db = client.db('TodoApp');
      let criteria = {};
      if (name) {
        criteria = {
          city: new RegExp(name)
        };
      }
      console.log('Criteria: ', criteria);
      return db.collection('ZipCodes')
        .find(criteria)
        .limit(25)
        .toArray()
        .then((docs) => {
          client.close();
          //console.log(docs);
          return docs;
        }, (err) => {
          client.close();
          return err;
        });
    }, (err) => console.log(err));

};
module.exports = {
  getZipCodesAsync,
  getZipCodesAsync2
};
