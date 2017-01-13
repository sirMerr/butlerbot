const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// wdpoints are world domination points
// userId is NOT the same as discord's hella long snowflake one.
const userSchema = new Schema({
	username: String,
	email: String,
	nicknames: [{ type: String, default: '' }],
	wdpoints: { type: Number, default: 0 },
	admin: { type: Boolean, default: false }
});

// expose userSchema
module.exports = mongoose.model('User', userSchema);
