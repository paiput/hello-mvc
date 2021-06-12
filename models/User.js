const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  namme: String,
  mail: String,
  birthday: Date
});

const User = mongoose.model('User', UserSchema);

module.exports = User;