const router = require('express').Router()
const Place = require('../models/places.js')

// INDEX
router.get('/', (req, res) => {
    res.render('places/index', 
    { 
        places: Place,
    }) // render looks for views folder, don't have to specify
})

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

// SHOW
router.get('/:arrayIndex', (req, res) => {
    if (Place[req.params.arrayIndex]) {
        res.render('places/show', {
            place: Place[req.params.arrayIndex] // anonymous object. ( place: ) is the field
        })
    } else {
        res.render('error404')
    }
})

// CREATE
router.post('/', (req, res) => { // I thought it was supposed to be a POST /places route?
    if (!req.body.pic) {
        req.body.pic = 'https://www.discoverlosangeles.com/sites/default/files/images/2019-01/laxbw-prime-1715-hor-wide.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp'
    }
    if (!req.body.city && !req.body.state) {
        req.body.city = 'unknown'
    }
    Place.push(req.body)
    res.redirect('/places')
})

module.exports = router