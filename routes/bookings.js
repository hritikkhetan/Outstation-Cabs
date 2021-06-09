const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')


router.get('/', async(req, res) => {
    try{
        const bookings = await Booking.find()
        res.json(bookings)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req, res) => {
    const booking = new Booking({
        members: req.body.members,
        promo: req.body.promo,
        amount: req.body.amount,
        pick_loc: req.body.pick_loc,
        drop_loc: req.body.drop_loc,
        pick_dateTime: req.body.pick_dateTime,
        car_type: req.body.car_type,
        car_model: req.body.car_model,
        max_seat: req.body.max_seat,
        air_circ: req.body.air_circ,
        rating: req.body.rating,
        fixed_km: req.body.fixed_km,
        fixed_price: req.body.fixed_price,
        cost_per_km: req.body.cost_per_km
    })
    try{
        const b1 =  await booking.save()
        res.json(b1)
    }catch(err){
        res.send(err)
    }
})

module.exports = router