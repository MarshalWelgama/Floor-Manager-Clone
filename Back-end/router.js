const express = require("express")
const Customer = require("./models/Customer") // new
const Session = require("./models/Session")
const router = express.Router()


//creates new customer
router.post("/:auth/customers", async (req, res) => {
    console.log(req.body.number)
	const customer = new Customer({
        auth: req.params.auth,
		name: req.body.name,
		number: req.body.number,
	})
	await customer.save()
	res.send(customer)
})

//get all customer info based on session id
router.get("/:auth/customers/", async (req, res) => {
	const post = await Customer.find({auth: req.params.auth})
	res.send(post)
})

//get specific customer info based on id
router.get("/:auth/customers/:id", async (req, res) => {
	const post = await Customer.findOne({ _id: req.params.id, auth: req.params.auth})
	res.send(post)
})


//create new session
router.post("/session", async (req, res) => {
    console.log(req.body.date)
	const session = new Session({
		date: req.body.date
	})
	await session.save()
	res.send(session)
})

module.exports = router