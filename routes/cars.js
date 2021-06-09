const express = require('express')
const router = express.Router()
const Car = require('../models/car')


router.get('/', async(req, res) => {
    try{
        const cars = await Car.find()
        res.json(cars)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:pick_loc/:drop_loc/:pick_dateTime/:people/:car_type', async(req, res) => {
    const pick_loc = req.params.pick_loc
    const drop_loc = req.params.drop_loc
    const pick_dateTime = req.params.pick_dateTime
    const people = req.params.people
    const car_type = req.params.car_type
    try{
        const cars = await Car.find({$and:[{'pick_loc': pick_loc}, {'drop_loc': drop_loc}, {'pick_dateTime': pick_dateTime}, {"max_seat":{$gte:people}}, {'car_type': car_type}]})
        res.json(cars)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const car = await Car.findById(req.params.id)
        res.json(car)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const car = new Car({
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
        const c1 =  await car.save() 
        res.json(c1)
    }catch(err){
        res.send(err)
    }
})

module.exports = router