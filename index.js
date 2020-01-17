const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT //|| 3025;
const path = require('path')
// const port = 3025
const configureDB = require('./config/database')
const router = require('./config/routes')
app.use(express.json())
configureDB()
app.use(cors())

app.use('/',router)

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 

// // ROute Handlers || Request Handlers
// app.get('/', (req,res) => {
//     res.send('Welcome to the page')
// })



app.listen(port, () => {
    console.log('listening to the port,',port)
})
