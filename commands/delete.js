/**
 * Deletes a number of messages and sends a message to
 * the channel
 * @param  {Message} message -- message object
 * @example
 * // sends 'I would like to inform you I have deleted 3 messages'
 * // after deleting 3 messages.
 * ~delete 3
 */
function deleteMsgs(message) {
	// removes the ~delete part of the command
	let msgNum = message.content.replace('~delete ', '');

	// checks that the string only contains numbers
	if (/^[0-9]*$/.test(msgNum)) {
		msgNum = Number(msgNum);

		// fetch channel messages and delete each one individually
		message.channel.fetchMessages({ limit: 50 })
			.then(messages => {
				const msgArray = messages.array();
				msgArray.length = msgNum + 1;
				msgArray.map(m => m.delete().catch(console.error));
			});

		// logs that messages were deleted
		console.log('Deleted ' + msgNum + ' messages.');
		message.channel.send('I would like to inform you I have deleted ' + msgNum + ' messages in your stead');
	} else {
		message.channel.send('Your message did not follow the format `~delete [number]`, please try again, sir.');
	}
}

module.exports = deleteMsgs;
