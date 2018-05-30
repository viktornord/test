const router = require('express').Router();
const UserData = require('../db/data-model');

router.post('/sum', async (req, res, next) => {
  try {
    const { a, b } = req.body;
    const result = Number(a + b);
    if (Number.isNaN(result)) {
      return res.status(400).send({message: 'Request body must contain a & b props which are valid numbers'});
    }
    await new UserData({result}).save();
    res.send({data: result});
  } catch (e) {
    next(e);
  }
});

module.exports = router;