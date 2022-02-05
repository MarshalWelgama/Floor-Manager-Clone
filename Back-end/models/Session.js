const mongoose = require("mongoose")

const schema = mongoose.Schema({
	date: String
})

module.exports = mongoose.model("Session", schema)