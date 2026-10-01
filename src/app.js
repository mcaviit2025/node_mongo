const express = require("express")
const authRoutes = require("../src/routes/auth.routes")
const cookieParser = require("cookie-parser")

const app = express()

// Middleware
app.use(express.json())

app.use("/api/auth",authRoutes)

app.use(cookieParser());

module.exports = app