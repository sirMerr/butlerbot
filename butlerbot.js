module.exports = (req, res, next) => {
	const userName = req.body.user_name;
	const botPayload = {
		text: 'Hello, ' + userName + '!'
	};

	if (userName !== 'butlerbot') {
		return res.status(200).json(botPayload);
	}
	return res.status(200).end();
};
