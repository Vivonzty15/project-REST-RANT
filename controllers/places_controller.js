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

// EDIT
router.get('/:arrayIndex/edit', (req, res) => {
    let id = Number(req.params.arrayIndex)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!Place[id]) {
        res.render('error404')
    } else {
        res.render('places/edit', {
            place: Place[id], // anonymous object. ( place: ) is the field
            index: req.params.arrayIndex,
        })
    }
})

// SHOW
router.get('/:arrayIndex', (req, res) => {
    if (Place[req.params.arrayIndex]) {
        res.render('places/show', {
            place: Place[req.params.arrayIndex], // anonymous object. ( place: ) is the field
            index: req.params.arrayIndex,
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

// DELETE
router.delete('/:arrayIndex', (req, res) => {
    let id = Number(req.params.arrayIndex)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!Place[id]) {
        res.render('error404')
    }
    else {
        Place.splice(id, 1)
        res.redirect('/places')
    }
})

// UPDATE
router.put('/:arrayIndex', (req, res) => {
    let id = Number(req.params.arrayIndex)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!Place[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            req.body.pic = 'https://www.discoverlosangeles.com/sites/default/files/images/2019-01/laxbw-prime-1715-hor-wide.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp'
        }
        if (!req.body.city && !req.body.state) {
            req.body.city = 'unknown'
        }
        // save new data into places[id]
        Place[id] = req.body
        res.redirect(`/places/${id}`)
    }
})


module.exports = router