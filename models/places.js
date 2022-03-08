// require mongoose
const mongoose = require('mongoose')

// schema
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

// helper methods
placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.cuisines} in ${this.city}, ${this.state} since ${this.founded}.`
}

// model and export
module.exports = mongoose.model('places', placeSchema)