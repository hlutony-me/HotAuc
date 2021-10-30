const express = require("express")
const connectDB = require("./config/db")

const app = express()

//Connect MongoDB
connectDB()

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
	console.log(`Port listening on ${PORT}`)
})
