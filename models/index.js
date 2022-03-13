// require mongoose
//const server = require('../server.js')
require('dotenv').config()
const mongoose = require('mongoose')
//const path = require('path')


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')