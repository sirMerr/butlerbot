function deleteMsgs(message) {
	let msgNum = message.content.replace('~delete ', '');
	if (/^[0-9]*$/.test(msgNum)) {
		msgNum = Number(msgNum);
		message.channel.fetchMessages({ limit: 50 })
			.then(messages => {
				const msgArray = messages.array();
				msgArray.length = msgNum + 1;
				msgArray.map(m => m.delete().catch(console.error));
			});
		console.log('Deleted ' + msgNum + ' messages.');
		message.channel.send('I would like to inform you I have deleted ' + msgNum + ' messages in your stead');
	} else {
		message.channel.send('Your message did not follow the format `~delete [number]`, please try again, sir.');
	}
}

module.exports = deleteMsgs;
