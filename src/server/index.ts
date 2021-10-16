import express from 'express';
const path = require('path');

const app = express();

const port = 3100;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});
app.get('/game', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('.' + req.path));
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
