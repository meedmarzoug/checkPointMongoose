const mongoose = require('mongoose')

// create a schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    favoriteFoods: [String]
});

// Creating a model
module.exports = mongoose.model('person', personSchema)