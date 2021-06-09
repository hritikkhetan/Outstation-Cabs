const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CarDBex'
const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const carRouter = require('./routes/cars')
app.use('/cars', carRouter)

const bookingRouter = require('./routes/bookings')
app.use('/bookings', bookingRouter)

app.listen(9000, () => {
    console.log('Server started')
})