const mongoose = require('mongoose');

const UserData = mongoose.model('UserData', mongoose.Schema({
  result: mongoose.Schema.Types.Number
}, {collection: 'user-data'}));

module.exports = UserData;