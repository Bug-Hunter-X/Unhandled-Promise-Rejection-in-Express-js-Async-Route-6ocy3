const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(err => {
    // The error is caught here but not properly handled
    console.error(err);
  });
});

function doAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a scenario where an error might occur asynchronously
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

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});