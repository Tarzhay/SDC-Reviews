const express = require('express');
const newrelic = require('newrelic');
newrelic.instrumentLoadedModule(
  'express', // the module's name, as a string
  express // the module instance
  );
const app = express();
const port = 3003;
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const _ = require('underscore');

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

// app.get('/api/reviews/:id', (req, res) => {
//   var productId = req.params.id;
//   db.connection.query(`SELECT * FROM reviews WHERE productId = ${productId}`, (err, result) => {
//     if (err) {
//       console.log(err)
//     }
//     res.send(result);
//   })
// })

//SDC Postgres Routes
app.get('/api/reviews/:productId', (req, res) => {
  // console.log(Number(req.params.productId))
  const productId = Number(req.params.productId)
  db.getProductReview(productId, (err, success) => {
    if (err) {
      res.status(400).send('Bad request, unable to retrieve reviews');
    } else {
      // console.log(success.rows[0].id)
      res.status(200).send(success.rows);
    }
  })
})

app.post('/api/reviews/:productId', (req, res) => {
  const productId = Number(req.params.productId)
  db.postProductReview(req.body, productId, (err, success) => {
    if (err) {
      res.status(400).send('Bad request, unable to post review')
    } else {
      res.status(200).send(success)
    }
  })
})





app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})
