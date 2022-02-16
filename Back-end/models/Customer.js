const mongoose = require("mongoose")

const schema = mongoose.Schema({
    auth: String,
	information: String,
	number: String,
})

module.exports = mongoose.model("Customer", schema)