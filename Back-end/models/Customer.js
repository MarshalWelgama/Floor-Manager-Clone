const mongoose = require("mongoose")

const schema = mongoose.Schema({
    auth: String,
	name: String,
	number: String,
})

module.exports = mongoose.model("Customer", schema)