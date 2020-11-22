const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const _ = require('underscore');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.get('/api/reviews/:id', (req, res) => {
  var productId = req.params.id;
  db.connection.query(`SELECT * FROM reviews WHERE productId = ${productId}`, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result);
  })
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})
