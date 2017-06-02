var mongoose = require('mongoose');

mongoose.connect('mongodb://spalmaro:K1nderlove@ds161551.mlab.com:61551/webtag');
module.exports = mongoose.connection;
