// Imported Modules
import express from 'express'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'

// Local variables
const port = 3001
const db = mongoose.connection
const app = express()
const __dirname = path.dirname('../frontend/pages/')

// Middleware
app.use(
  cors({
    origin: '*',
  })
)
app.use('/', express.static("../frontend/pages/"))

// Root file
app.get('/', (req, res) => {
  res.sendFile('home/home.html', { root: path.join(__dirname, '../frontend/pages/') })
})

// DataBase
mongoose.connect("mongodb+srv://jyotii25:queuemedi@mediq.p9gdaoi.mongodb.net/?retryWrites=true&w=majority")
db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log("Database connected") })

// Port Connection
app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`)
})
