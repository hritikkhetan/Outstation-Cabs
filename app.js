const express = require('express')
const mongoose = require('mongoose')
const URI = 'mongodb+srv://hritik:123@freecluster.51vdj.mongodb.net/CarDBex?retryWrites=true&w=majority'
const app = express()
const connectDB = async () => {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('db connected..!');
  };
/*const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})*/

connectDB()

app.use(express.json())

const carRouter = require('./routes/cars')
app.use('/cars', carRouter)

const bookingRouter = require('./routes/bookings')
app.use('/bookings', bookingRouter)

app.listen(9000, () => {
    console.log('Server started')
})