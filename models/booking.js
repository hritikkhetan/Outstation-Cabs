const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    members: {
        type: [{name: String, contact_number: Number, mail_id: String, age: Number, gender: String}],
        required: true
    },
    promo: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    pick_loc: {
        type: String,
        required: true
    },
    drop_loc: {
        type: String,
        required: true
    },
    pick_dateTime: {
        type: String,
        required: true
    },
    car_type: {
        type: String,
        required: true
    },
    car_model: {
        type: String,
        required: true
    },
    max_seat: {
        type: Number,
        required: true
    },
    air_circ: {
        type: String,
        required: true,
        default: 'NAC'
    },
    rating: {
        type: Number,
        required: true
    },
    fixed_km: {
        type: Number,
        required: true
    },
    fixed_price: {
        type: Number,
        required: true
    },
    cost_per_km: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('Booking', bookingSchema)