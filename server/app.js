import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import db from "./db"
import router from "./router/profile"

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on("error", console.error.bind(console, "Error in MongoDB connection:"))

app.use("/api", router)

// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(err.status || 500).send({
		error: {
			status: err.status || 500,
			message: err.message || "Internal Server Error",
		},
	})
})

export default app