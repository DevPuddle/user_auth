const express = require('express')
const app = express()
const PORT = 5500
const connectDB = require('./db.js')

connectDB()

app.use(express.json())
app.use('/api/Auth', require('./Auth/Routes'))

const server = app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} ya did it`)
})

process.on('unhandledRejection', err => {
    console.log(`An error occured: ${err.message}`)
    server.close(() => process.exit(1))
})

