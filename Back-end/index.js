const express = require('express')
const mongoose = require("mongoose") 
const routes = require("./router")
const app = express()
const port = 8888

// app.get('/customers', (req, res) => {
//     let customersArr = ["hi", "world"]
//   res.send(customersArr)

// })

mongoose
	.connect("mongodb://localhost:27017/floorManager", { useNewUrlParser: true })
	.then(() => {
        app.use(express.json())
        app.use('/api', routes)
   
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})