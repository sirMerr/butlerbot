const path = require('path');
const express = require('express');
const Discord = require('discord.js');

const app = express();
const butlerbot = new Discord.Client();
const token = 'MjY3NzU0NzgyMzgxNDQxMDM2.C1Q8UQ.MhW8oPNdEOne_-mn4ONnGb5rpYQ';
const commands = {
	butler: 'Will respond to you in a respectful tone.',
	idiot: 'I shouldn\'t have to tell you.',
	'~emojify': 'Transforms a message into bubble letters.',
	'~help': 'Shows description for each command.'
};

function getCommand(msg) {
	let cmd;

	switch (msg) {
		case '~help':
			cmd = 'help';
			break;
		default:
			break;
	}

	if (msg.startsWith('~emojify')) {
		cmd = 'emojify';
	}

	if (msg.startsWith('~emojify')) {
		cmd = 'emojify';
	}

	if (msg.includes('idiot')) {
		cmd = 'idiot';
	}

	if (msg.includes('butler')) {
		cmd = 'butler';
	}

	return cmd;
}

// turn butlerbot on, make sure it's ready before receiving messages
butlerbot.on('ready', () => {
	console.log('butlerbot is ready to serve...');
});

// event listener for messages
butlerbot.on('message', message => {
	if (message.author.username === 'butlerbot') {
		return;
	}

	// log messages
	if (message.channel.isPrivate) {
		console.log(`(Private) ${message.author.username}: ${message.content}`);
	} else {
		console.log(`(${message.guild.name} / ${message.channel.name}) ${message.author.username}: ${message.content}`);
	}

	const msg = message.content;

	switch (getCommand(msg)) {
		case 'help': {
			const arr = [];
			Object.keys(commands).forEach(cmd => arr.push(`\`${cmd}\`: ${commands[cmd]}`));
			message.channel.send(arr.join('\n'));
			break;
		}

		case 'emojify': {
			let vertical = false;
			if (msg.includes('(vertical) ')) {
				vertical = true;
			}

			const m = msg.split('~emojify ')[1].replace('(vertical) ', '');

			if (/^[a-zA-Z0-9 !]+$/.test(m)) {
				const arr = [];
				m.split('').forEach(l => {
					switch (l) {
						case '!':
							arr.push(':exclamation:');
							break;
						case ' ':
							arr.push('  ');
							break;
						default:
							arr.push(`:regional_indicator_${l.toLowerCase()}:`);
					}
				});
				message.channel.send(arr.join(vertical ? '\n' : '')).then(message.delete());
			} else {
				message.reply('your message included non-letters. Try again sir.');
			}
			break;
		}

		case 'butler': {
			message.reply('greetings master.');
			break;
		}

		case 'idiot': {
			message.channel.send('Sir, my database found this user to be the biggest one: ' + message.author.avatarURL);
			break;
		}

		default:
			break;
	}
});

butlerbot.login(token);

// Stuff for Heroku to run properly
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	response.send('Hello World!');
});

app.listen(app.get('port'), () => {
	console.log('Node app is running at localhost:' + app.get('port'));
});
