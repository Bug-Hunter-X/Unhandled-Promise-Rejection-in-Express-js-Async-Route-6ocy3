const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  doAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(next);
});

function doAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});