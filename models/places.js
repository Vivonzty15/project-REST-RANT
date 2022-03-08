// require mongoose
const mongoose = require('mongoose')

// schema
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: [true, "already exists"] },
    pic: { type: String, default: 'https://media-cdn.tripadvisor.com/media/photo-p/14/62/3b/d9/photo1jpg.jpg'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, "Surely not that old?!"],
        max: [new Date().getFullYear(), "Hey, this year is in the future!"]
    }
})

// helper methods
placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.cuisines} in ${this.city}, ${this.state} since ${this.founded}.`
}

// model and export
module.exports = mongoose.model('places', placeSchema)