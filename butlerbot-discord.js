const Discord = require('discord.js');

const butlerbot = new Discord.Client();
const token = 'MjY3NzU0NzgyMzgxNDQxMDM2.C1Q8UQ.MhW8oPNdEOne_-mn4ONnGb5rpYQ';

// turn butlerbot on, make sure it's ready before receiving messages
butlerbot.on('ready', () => {
	console.log('butlerbot is ready to serve...');
});

// event listener for messages
butlerbot.on('message', message => {
	const msg = message.content;

	// log messages
	if (message.channel.isPrivate) {
		console.log(`(Private) ${message.author.username}: ${message.content}`);
	} else {
		console.log(`(${message.guild.name} / ${message.channel.name}) ${message.author.username}: ${message.content}`);
	}

	if (msg === 'butler' || msg === 'butlerbot') {
		message.reply('greetings master.');
	}

	if (msg === 'who\'s the idiot' || msg === 'idiot') {
		message.reply(message.author.avatarURL);
	}

	if (msg.startsWith('~emojify ')) {
		let vertical = false;
		if (msg.contains('(vertical)')) {
			vertical = true;
		}

		const m = msg.split('~emojify ')[1];

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
