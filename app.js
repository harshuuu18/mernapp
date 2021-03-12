const express = require('express')
const port = process.env.PORT || 5000
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./config/key')
// 90EwlF2be9Gdt5WS
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected', () => {
    console.log("Connected to Mongo Yeah")
})
mongoose.connection.on('error', (err) => {
    console.log(`Not Connected ${err}`)
})
app.use(express.json())

require('./models/user')
require('./models/post')


app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.get('/', (req,res) => {
    res.send("hello from the harsh")
})


    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

// mongodb://localhost:27017/myapp