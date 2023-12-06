const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const helmet = require('helmet')
const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {	})

app.listen(PORT, () => console.log("Server running on port " + PORT))