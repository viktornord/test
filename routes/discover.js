const router = require('express').Router();
const UserData = require('../db/data-model');

router.get('/discover', async (req, res, next) => {
  try {
    res.send(await UserData.find());
  } catch (e) {
    next(e);
  }
});

module.exports = router;