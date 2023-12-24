require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL,
  {
    useNewUrlParser: true
  })

const db = mongoose.connection
db.on('error', (e) => console.log(e))
db.once('open', () => console.log('Connection successful'))

const gamesRouter = require("./routes/games")

app.use(express.json())

app.use("/game", gamesRouter)

PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})