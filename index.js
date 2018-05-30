const mongoose = require('mongoose');
const server = require('express')();
const bodyParser = require('body-parser');

const squareRouter = require('./routes/square');
const sumRouter = require('./routes/sum');
const discoverRouter = require('./routes/discover');


server.use(bodyParser.json())
  .use(squareRouter)
  .use(sumRouter)
  .use(discoverRouter)
  .use((req, res, next) => {
    res.status(404).send({message: 'Resource not found'});
  })
  .use((req, res, next, err) => {
    res.status(500).send(err);
  });


mongoose.connect(process.env.MONGO_URL).then(() => server.listen(3000));