require('dotenv').config()
// https://www.npmjs.com/package/dotenv

// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// FILE ROUTES
const connectDB = require('./db/connectDB.js')
const Router = require('./routes/routes.js')

// Settings
const app = express()
const port = 3000

// DB CONECTION
connectDB()

// Middleware
app.use(express.json());
app.use(cors({
  origin: true,
  // origin:[
  //   process.env.FRONTEND_DEV,
  //   process.env.FRONTEND_DEPLOYED
  // ],
  credentials: true
}))
app.use(cookieParser())

// Routes
app.use('/', Router)

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})