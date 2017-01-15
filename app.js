const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_9kl1pd2m:ab73k2mv2itghk4m35ad8p7n5h@ds159348.mlab.com:59348/heroku_9kl1pd2m');

const app = express();

// this will let us get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// stops deprecation warnings & misuse
mongoose.Promise = global.Promise;

// get models
const User = require('./models/user');

// set port
app.set('port', (process.env.PORT || 5000));

// routes for api
const router = express.Router();

// middleware for requests, validation, errors and logging
router.use((req, res, next) => {
	// logging
	console.log(moment().format('MM-DD-YYYY, hh:mm:ss') + '-- ' + req.method + ': ' + req.originalUrl);
	next();
});

// get api, access at
// GET http://localhost:5000/api
router.get('/', (req, res) => {
	res.json({ message: 'Hello Masters of the World!' });
});

// create a user, at
// POST http://localhost:5000/api/users
router.route('/users')
	.post((req, res) => {
		const user = new User();
		user.username = req.body.username;
		user.admin = req.body.admin;

		user.save(err => {
			if (err) {
				res.send(err);
			}
			res.json(user);
		});
	})
		// get all users, at GET http://localhost:5000/api/users
		.get((req, res) => {
			User.find((err, users) => {
				if (err) {
					res.send(err);
				}
				res.json(users);
			});
		});

// get user with specific id, at (replace user_id)
// GET http://localhost:5000/api/users/user_id
router.route('/users/:user_id')
	.get((req, res) => {
		User.findById(req.params.user_id, (err, user) => {
			if (err) {
				res.send(err);
			}
			res.json(user);
		});
	})

	// update username with this id, access at
	// PUT http://localhost:5000/api/users/user_id
	.put((req, res) => {
		User.findById(req.params.user_id, (err, user) => {
			if (err) {
				res.send(err);
			}
			user.username = req.body.username;

			user.save(err => {
				if (err) {
					res.send(err);
				}

				console.log('Username updated to ' + user.username);
				res.json({ message: 'Username updated to: ' + user.username });
			});
		});
	});

// register routes
app.use('/api', router);

// app.get('/', (request, response) => {
// 	response.send('Hello World!!');
// });

app.listen(app.get('port'), () => {
	console.log('Node app is running at localhost:' + app.get('port'));
});
