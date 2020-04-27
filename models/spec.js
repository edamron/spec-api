const mongoose = require('mongoose');

const specSchema = new mongoose.Schema({
	front: { type: Number, required: true },
	rear: { type: Number, required: true },
	year: { type: Number, required: true },
	make: { type: String, required: true },
	model: { type: String, required: true },
});

module.exports = mongoose.model('suspension-specs', specSchema);
