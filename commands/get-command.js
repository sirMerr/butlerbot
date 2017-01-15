function getCommand(msg) {
	if (msg.startsWith('~help')) return 'help';

	if (msg.startsWith('~emojify')) return 'emojify';

	if (msg.startsWith('~praiseme')) return 'praiseme';

	if (msg.includes('idiot')) return 'idiot';

	if (msg.includes('butlerbot')) return 'butlerbot';

	if (msg.startsWith('~delete')) return 'delete';
}

module.exports = getCommand;
