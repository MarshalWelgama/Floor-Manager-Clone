const mongoose = require("mongoose")

const schema = mongoose.Schema({
	time: String,
	dNumber: String
})

module.exports = mongoose.model("Session", schema)