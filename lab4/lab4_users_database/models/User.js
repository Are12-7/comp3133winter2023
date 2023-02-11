// Carlos Arellano - 101339585
const mongoose = require('mongoose')

var isValidEmail = function (email) {
    var emailRegxp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegxp.test(email)
}
var isValidCity = function (city) {
    var cityRegxp = /^[A-Za-z\s]*$/;
    return cityRegxp.test(city)
}
var isValidZip = function (zipcode) {
    var zipRegxp = /^\(?(\d{5})\)?[- ]?(\d{4})*$/;
    return zipRegxp.test(zipcode)
}

var isValidPhone = function (phone) {
    var phoneRegxp = /^\(?(\d{1})\)?[- ]?(\d{3})[- ]?(\d{3})[-]?(\d{4})$/;
    return phoneRegxp.test(phone)
}

var isValidWebsite = function (website) {
    var webRegxp = /^http|https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    return webRegxp.test(website)
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        minlength: [4, 'username must be 4 characters long or above'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isValidEmail, 'Please enter a valid email'],
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    address: {
        street: { type: String, required: true },
        suite: { type: String, required: true },
        city: {
            type: String,
            required: true,
            validate: [isValidCity, 'City can only contain alphabets and space'],
            match: [/^[A-Za-z\s]*$/],
        },
        zipcode: {
            type: String,
            required: true,
            validate: [isValidZip, 'Incorrect zipcode. Format must be like 12345-1234'],
            match: [/^\(?(\d{5})\)?[- ]?(\d{4})*$/]
        },
        geo: {
            lat: { type: String, required: true },
            lng: { type: String, required: true }
        }
    },
    phone: {
        type: String,
        required: true,
        validate: [isValidPhone, 'Phone format should be like 1-123-123-1234'],
        match: [/^\(?(\d{1})\)?[- ]?(\d{3})[- ]?(\d{3})[-]?(\d{4})$/]
    },
    website: {
        type: String,
        required: true,
        validate: [isValidWebsite, 'Wrong website. We only accept http or https.'],
        match: [/^http|https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/]
    },
    company: {
        name: { type: String, required: true },
        catchPhrase: { type: String, required: true },
        bs: { type: String, required: true }
      }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;