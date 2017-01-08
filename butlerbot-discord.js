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
		console.log(`(Private) ${message.author.name}: ${message.content}`);
	} else {
		console.log(`(${message.server.name} / ${message.channel.name}) ${message.author.name}: ${message.content}`);
	}
	if (msg === 'butler' || msg === 'butlerbot') {
		message.reply('greetings master.');
	}

	if (msg === 'who\'s the idiot' || msg === 'idiot') {
		message.reply(message.author.avatarURL);
	}
});

butlerbot.login(token);
