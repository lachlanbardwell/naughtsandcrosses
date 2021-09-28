import express from 'express';

const app = express();

const port = 3100;

app.use(express.static('static'));

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
