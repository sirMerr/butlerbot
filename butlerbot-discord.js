const path = require('path');
const express = require('express');
const Discord = require('discord.js');

const app = express();
const butlerbot = new Discord.Client();
const token = 'MjY3NzU0NzgyMzgxNDQxMDM2.C1Q8UQ.MhW8oPNdEOne_-mn4ONnGb5rpYQ';
const commands = {
	butler: 'description of this',
	idiot: 'description of this',
	'~emojify': 'description of this',
	'~help': 'description of this'
};

// turn butlerbot on, make sure it's ready before receiving messages
butlerbot.on('ready', () => {
	console.log('butlerbot is ready to serve...');
});

// event listener for messages
butlerbot.on('message', message => {
	const msg = message.content;

	if (msg === '~help') {
		const arr = [];
		Object.keys(commands).forEach(cmd => arr.push(`\`${cmd}\`: ${commands[cmd]}`));
		message.channel.send(arr.join('\n'));
	}

	// log messages
	if (message.channel.isPrivate) {
		console.log(`(Private) ${message.author.username}: ${message.content}`);
	} else {
		console.log(`(${message.guild.name} / ${message.channel.name}) ${message.author.username}: ${message.content}`);
	}

	if (msg.includes('butler') || msg === 'hi butlerbot') {
		message.reply('greetings master.');
	}

	if (msg.includes('idiot')) {
		message.channel.send('Sir, my database found this user to be the biggest one: ' + message.author.avatarURL);
	}

	// if (msg === '~help') {
	// 	for (let i = 0; i++; i < commands.length) {
	// 		message.channel.send(commands[i] + '\n');
	// 	}
	// }

	if (msg.startsWith('~emojify ')) {
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
