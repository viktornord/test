const router = require('express').Router();
const UserData = require('../db/data-model');

router.get('/square', async (req, res, next) => {
  try {
    const value = Number(req.query.value);
    if (Number.isNaN(value)) {
      return res.status(400).send({message: 'Valid number should be provided as a query param'});
    }
    const result = value**2;
    await new UserData({result}).save();
    res.send({data: result});
  } catch (e) {
    next(e);
  }
});

module.exports = router;