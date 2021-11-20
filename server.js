const express = require("express")
const connectDB = require("./config/db")
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./swagger.json")
const cors = require('cors')

const app = express()

//Connect MongoDB
connectDB()

//Init middleware
app.use(express.json({ extended: false }))

//Using cors to connect to local api
app.use(cors());

app.get("/", (req, res) => {
	res.send("API running")
})

//Use Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/user",require('./routes/api/user'))
app.use("/api/item",require('./routes/api/item'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Port listening on ${PORT}`)
})
