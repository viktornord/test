const router = require('express').Router();

router.get('/square', (req, res, next) => {
  const value = Number(req.query.value);
  Number.isNaN(value)
    ? res.status(400).send({message: 'Valid number should be provided as a query param'})
    : res.send({data: value**2});
});

module.exports = router;