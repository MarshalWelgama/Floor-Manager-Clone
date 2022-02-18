const express = require("express")
const Customer = require("./models/Customer") // new
const Session = require("./models/Session")
const moment = require("moment")
const router = express.Router()


//creates new customer
router.post("/:auth/customers", async (req, res) => {
    console.log(req.body.number)
	const customer = new Customer({
        auth: req.params.auth,
		information: req.body.information,
		number: req.body.number,
		time: moment().format()

	})
	await customer.save()
	res.send(customer)
})

router.delete("/customers/:id", async (req, res) => {
	try {
		await Customer.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "customer doesn't exist!" })
	}
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

	var dateToday = moment().format("DD/MM/YYYY HH:mm")
	const session = new Session({
		time: dateToday,
		dNumber: req.body.dNumber
	})
	await session.save()
	res.send(session._id)
})

module.exports = router