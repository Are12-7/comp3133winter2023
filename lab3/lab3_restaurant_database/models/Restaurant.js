// Carlos Arellano - 101339585
const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    building: {
        type: Number
    },
    street: {
        type: String
    },
    zipcode: {
        type: String
    },
    city: {
        type: String
    },
    cuisine: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    restaurant_id: {
        type: Number
    }
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;