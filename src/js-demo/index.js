// function x() {
//     let p = 2;
//     var m = 5;
//     for(var i = 0; i <=5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
// }

// x();

const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/user', (req, res) => {
    res.send('Hello User!')
});

app.listen(3000)