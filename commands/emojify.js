/**
 * Sends user's message with emojis, horizontally or
 * vertically, and deletes the command
 * message.
 * @param  {Message} message -- message object
 * @example
 * // return HI vertically in emojis
 * ~emojify (vertical) hi
 *
 */
function emojify(message) {
	let vertical = false;
	const msg = message.content;

	if (msg.includes('(vertical) ')) {
		vertical = true;
	}

	const m = msg.split('~emojify ')[1].replace('(vertical) ', '');

	if (/^[a-zA-Z0-9 !]+$/.test(m)) {
		const arr = m.split('').map(l => {
			switch (l) {
				case '!':
					return ':exclamation:';
				case ' ':
					return '  ';
				default:
					return `:regional_indicator_${l.toLowerCase()}:`;
			}
		});
		message.channel.send(arr.join(vertical ? '\n' : '')).then(message.delete());
	} else {
		message.reply('your message included non-letters. Try again sir.');
	}
}

module.exports = emojify;
