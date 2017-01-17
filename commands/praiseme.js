/**
 * Praises user based on an array of praises.
 * @param  {Message.author} author -- author of message
 * @return {String}        				 -- random praise from array
 */
function getRandomPraise(author) {
	const praises = [
		`Master ${author} is the most handsome little girl in the world.`,
		`You know who's super smart? Master ${author}.`,
		`I bet Master ${author} knows how to bake mean blueberry scones!`,
		`Master ${author}, may I say you're as formidable as a Tecumseh Skipper`
	];

	return praises[Math.floor(Math.random() * praises.length)];
}

function praiseme({ channel, author }) {
	channel.send(getRandomPraise(author));
}

module.exports = praiseme;
