const router = require('express').Router();

router.post('/sum', (req, res, next) => {
  const { a, b } = req.body;
  const result = Number(a + b);
  Number.isNaN(result)
    ? res.status(400).send({message: 'Request body must contain a & b props which are valid numbers'})
    : res.send({data: result});
});

module.exports = router;