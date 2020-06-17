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

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.use("/api", router)

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send("Something broke!")
})

export default app