function getCommand(msg) {
	if (msg.startsWith('~help')) {
		return 'help';
	}

	if (msg.startsWith('~emojify')) {
		return 'emojify';
	}

	if (msg.includes('idiot')) {
		return 'idiot';
	}

	if (msg.includes('butler')) {
		return 'butler';
	}
}

module.exports = getCommand;
