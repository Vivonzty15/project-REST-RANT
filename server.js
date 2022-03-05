// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// HOME PAGE
app.get('/', (req, res) => {
    res.render('home') // render looks for views folder, don't have to specify
})

// Places
const placesController = require('./controllers/places_controller')
app.use('/places', placesController)

//404
app.get('*', (req, res) => {
    res.status(404).render(`error404`)
})

// LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
})