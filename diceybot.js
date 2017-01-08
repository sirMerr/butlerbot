// not used
const request = require('request');

module.exports = (req, res, next) => {
	// defaut roll is 2d6
	let matches;
	let times = 2;
	let die = 6;
	const rolls = [];
	let total = 0;
	const botPayload = {
		username: 'diceybot',
		channel: req.body.channel_id,
		icon_emoji: ':game_die:'
	};

	if (req.body.text) {
		// parse roll type if specified
		matches = req.body.text.match(/^(\d{1,2})d(\d{1,2})$/);
	}

	if (matches && matches[1] && matches[2]) {
		times = matches[1];
		die = matches[2];
	} else {
		// send error message if input is wrong
		return res.status(200).send('<number>d<sides>');
	}

	// roll dice and sum
	for (let i = 0; i++; i < times) {
		// total += roll(1, die);
		const currentRoll = roll(1, die);
		rolls.push(currentRoll);
		total += currentRoll;
	}

	// write response message and add to payload
	botPayload.text = req.body.user_name + ' rolled ' + times + 'd' + die + ':\n' +
										rolls.join(' + ') + ' = *' + total + '*';

	// send dice roll
	send(botPayload, (error, status, body) => {
		if (error) {
			return next(error);
		} else if (status !== 200) {
			// inform user that our Incoming WebHook failed
			return next(new Error('Incoming WebHook: ' + status + ' ' + body));
		}
		return res.status(200).end();
	});
};

function roll(min, max) {
	Math.floor((Math.random() * (max - min + 1)) + min);
}

function send(payload, callback) {
	// path tokens in Heroku's config vars & sending with JSON string
	request({
		uri: 'https://hooks.slack.com/services' + process.env.INCOMING_WEBHOOK_PATH,
		method: 'POST',
		body: JSON.stringify(payload)
	}, (error, response, body) => {
		if (error) {
			return callback(error);
		}

		callback(null, response.statusCode, body);
	});
}
