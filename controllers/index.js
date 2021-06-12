const User = require('../models/User');

exports.home = (req, res) => {
  User.find().sort('id').exec((err, users) => {
    res.render('index', { users: users });
  });
}

exports.search = (req, res) => {
  res.send('Implementar');
}