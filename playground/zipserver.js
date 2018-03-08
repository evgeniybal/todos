const express = require('express');
const zipService = require('./mongodb-find.js');
let app = express();

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params);
});
app.get('/zips/:city', (req, res) => {

  zipService.getZipCodesAsync2(req.params.city)
    .then(
      (data)=>{        
        res.send(data);
      },
      (err)=>{
        console.log('Error:');
        console.log(err);
      }
    );



});

app.get('/zips', (req, res) => {

  zipService.getZipCodesAsync2()
    .then(
      (data)=>{
        res.send(data);
      },
      (err)=>{
        console.log('Error:');
        console.log(err);
      }
    );



});

app.listen(3000);
