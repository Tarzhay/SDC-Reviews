const express = require('express');
const app = express();
const port = 3000;
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



// var summaryDataProcessor = function(array) {
//   var result = {};
//   result.fives = 0;
//   result.fours = 0;
//   result.threes = 0;
//   result.twos = 0;
//   result.ones = 0;
//   result.total = 0;

//   // var totalBroadAgeAppeal = 0;
//   // var totalLengthOfPlay = 0;
//   // var totalQuality = 0;
//   // var totalValue = 0;

//   for (var i = 0; i < array.length; i++) {
//     result.total += array[i].average;
//     if (Math.round(array[i].average) === 5) {
//       result.fives++;
//     } else if (Math.round(array[i].average) === 4) {
//       result.fours++;
//     } else if (Math.round(array[i].average) === 3) {
//       result.threes++;
//     } else if (Math.round(array[i].average) === 2){
//       result.twos++;
//     } else {
//       result.ones++
//     }
//   }
//   result.average = result.total / array.length;
//   result.percentFives = result.fives / array.length;
//   result.percentFours = result.fours / array.length;
//   result.percentThrees = result.threes / array.length;
//   result.percentTwos = result.twos / array.length;
//   result.percentOnes = result.ones / array.length;

//   return result
// }



    // var processedResult = summaryDataProcessor(result);
    // var finalResult =_.extend(result, processedResult);