const mongoose = require("mongoose")

const schema = mongoose.Schema({
    auth: String,
	information: String,
	number: String,
	time: String
})

module.exports = mongoose.model("Customer", schema)