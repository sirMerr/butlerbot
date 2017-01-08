/**
* BUTLERBOT IS READY TO SERVE
* PLEASE INPUT FOLLOWING COMMAND IN COMMAND LINE FUTURE PANEL TERMINAL:
* token=xoxb-124052891815-VlNCVybD2mGzIxpusF4HN9dE node app.js
* EXCELLENT MASTER, SEND ME A DIRECT MESSAGE ORDER IF YOU WILL.
*/

// makes sure API token is given in terminal
if (!process.env.token) {
	console.log('Error: Specify token in environment');
	process.exit(1);
}
const Botkit = require('botkit');

const butlerBot = Botkit.slackbot({
	debug: false
});

// connect bot to stream of messages
butlerBot.spawn({
	token: process.env.token
}).startRTM();

// give butlerbot something to listen for
butlerBot.hears('hello', ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
	bot.api.reactions.add({
		timestamp: message.ts,
		channel: message.channel,
		name: 'poop'
	}, (err, res) => {
		if (err) {
			bot.botkit.log('Failed to add emoji reaction', err);
		}
	});

	butlerBot.storage.users.get(message.user, (err, user) => {
		if (user && user.name) {
			bot.replyWithTyping(message, 'Greetings master ' + user.name + '.');
		} else {
			bot.replyWithTyping(message, 'Greetings master.');
		}
	});
});

butlerBot.hears('who are you', ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
	bot.replyWithTyping(message, 'I am *butlerbot*, I am here to serve you. To find out what I can do, type `@butlerbot help`');
});

butlerBot.hears('help', ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
	bot.replyWithTyping(message, 'Commands (@butlerbot [command]):\n1. `hello`\n2. `who are you`\n3. `help`');
});
