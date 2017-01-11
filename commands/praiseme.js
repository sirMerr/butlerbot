function getRandomPraise(author) {
	const praises = [
		`${author} is the most handsome little girl in the world.`,
		`You know who's super smart? ${author}.`
	];

	return praises[Math.floor(Math.random() * praises.length)];
}

function praiseme({ channel, author }) {
	channel.send(getRandomPraise(author));
}

module.exports = praiseme;
