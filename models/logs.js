const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// wdpoints are world domination points
// userId is NOT the same as discord's hella long snowflake one.
const logsSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	log: [{ id: Number, content: String, date: Date, comment: String }]
});

// expose userSchema
mongoose.model('Logs', logsSchema);
