const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define messageSchema
const messageSchema = new Schema({
	name: { type: String, unique: false },
	email: { type: String, unique: false, required: true },
	message: { type: String, unique: false }
});

// Create reference to message & export
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;