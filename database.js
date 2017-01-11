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

const kittySchema = mongoose.Schema({
	username: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
	const greeting = this.username ?
    'Meow username is ' + this.username :
    'I don\'t have a username';
	console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({username: 'Silence'});
console.log(silence.username); // 'Silence'

const fluffy = new Kitten({username: 'fluffy'});

fluffy.save((err, fluffy) => {
	if (err) {
		return console.error(err);
	}
	fluffy.speak();
});
