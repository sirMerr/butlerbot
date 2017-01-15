const Discord = require('discord.js');
const app = require('./app');

const butlerbot = new Discord.Client();
const token = 'MjY3NzU0NzgyMzgxNDQxMDM2.C1Q8UQ.MhW8oPNdEOne_-mn4ONnGb5rpYQ';
const commands = {
	butler: 'Will respond to you in a respectful tone.',
	idiot: 'I shouldn\'t have to tell you.',
	'~emojify [(vertical)]': 'Transforms a message into awesome bubble letters.',
	'~help': 'Shows description for each command.',
	'~praiseme': '[unavailable] Does exactly what it says.'
};

const getCommand = require('./commands/get-command');
const emojify = require('./commands/emojify');
const praiseme = require('./commands/praiseme');
const deleteMsgs = require('./commands/delete');

// turn butlerbot on, make sure it's ready before receiving messages
butlerbot.on('ready', () => {
	console.log('butlerbot is ready to serve...');
});

// event listener for messages
butlerbot.on('message', message => {
	const msg = message.content;
	const { username: authorName } = message.author;
	const { name: channelName } = message.channel;
	const { name: guildName } = message.guild;

	// makes sure butlerbot isn't triggering cases
	if (authorName === 'butlerbot') return;

	// log messages
	if (message.channel.isPrivate) {
		console.log(`(Private) ${authorName}: ${msg}`);
	} else {
		console.log(`(${guildName} / ${channelName}) ${authorName}: ${msg}`);
	}
	switch (getCommand(msg)) {
		case 'help': {
			const arr = Object.keys(commands).map(cmd => `\`${cmd}\`: ${commands[cmd]}`);
			message.channel.send(arr.join('\n'));
			break;
		}

		case 'emojify': {
			emojify(message);
			break;
		}
		case 'delete': {
			deleteMsgs(message);
			break;
		}

		case 'praiseme': {
			praiseme(message);
			break;
		}

		case 'butlerbot': {
			message.reply('greetings master.');
			break;
		}

		case 'idiot': {
			message.channel.send('Sir, my database found this user to be the biggest idiot: ' + message.author.avatarURL);
			break;
		}

		default:
			break;
	}
});

butlerbot.login(token);
module.exports = butlerbot;
