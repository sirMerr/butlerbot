const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// wdpoints are world domination points
// userId is NOT the same as discord's hella long snowflake one.
const userSchema = new Schema({
	_id: Number,
	username: String,
	email: String,
	logId: { type: Number, default: 0 },
	nicknames: [],
	wdpoints: Number
});

// onvert userSchema into Model
mongoose.model('User', userSchema);
