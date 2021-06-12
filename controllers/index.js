const User = require('../models/User');

exports.home = (req, res) => {
  res.render('index');
}

exports.search = (req, res) => {
  res.send('Implementar');
}