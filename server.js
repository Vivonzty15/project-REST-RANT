// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
//app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

const placesController = require('./controllers/places_controller')
app.use('/places', placesController)

// HOME PAGE
app.get('/', (req, res) => {
    res.render('home')
})

//404
app.get('*', (req, res) => {
    res.status(404).render(`error404`)
})

// LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
})