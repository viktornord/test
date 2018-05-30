const server = require('express')();
const bodyParser = require('body-parser');

const squareRouter = require('./routes/square');
const sumRouter = require('./routes/sum');


server.use(bodyParser.json())
  .use(squareRouter)
  .use(sumRouter)
  .use((req, res, next) => {
    res.status(404).send({message: 'Resource not found'});
  })
  .use((req, res, next, err) => {
    res.status(500).send(err);
  });


server.listen(3000);