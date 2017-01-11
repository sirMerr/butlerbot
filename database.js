const mongoose = require('mongoose');

// stops deprecation warnings & misuse
mongoose.Promise = global.Promise;

// connecting to
mongoose.connect('mongodb://heroku_9kl1pd2m:ab73k2mv2itghk4m35ad8p7n5h@ds159348.mlab.com:59348/heroku_9kl1pd2m');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});
