const router = require('express').Router()
const db = require('../models/')

// INDEX
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            res.render('error404')
        })
})

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
    
})

// EDIT
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', {
                place: place
            })
        })
        .catch(err => {
            res.render('error404')
        })
})

// SHOW
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render(`places/show`, { place })
        })
        .catch(err => {
            res.render('error404')
        })
})

// CREATE
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log(err.name)
            let message
            if (err && err.name == 'ValidationError') {
                message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            } else if (err && err.name == "MongoServerError") {
                message = "Duplicate Error: "
                for (var field in err.errors) {
                    message += `${field} ${err.errors[field].value}`
                    message += `${err.errors[field].message}`
                }
                res.render('places/new', { message })
            }
            else {
                res.render('error404')
            }
        })
})

router.get('/data/seed', (req, res) => {
    db.Place.insertMany([
        {
            name: 'Burger King',
            pic: 'https://images.gyft.com/merchants/i-100-1348411828820-30_hd.png',
            city: 'Wichita',
            state: 'KS',
            cuisines: 'American Fast Food',
            founded: 1999
        },
        {
            name: 'McDonald\'s',
            pic: 'https://s7d1.scene7.com/is/image/mcdonalds/FAQ_2PUB_574x384:2-column-desktop',
            city: 'Manhattan',
            state: 'NY',
            cuisines: 'American Fast Food',
            founded: 1980
        }
    ]).then(createdPlaces => {
        console.log(createdPlaces)
        res.redirect('/places')
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(deletedPlace => {
            console.log(deletedPlace)
            res.status(303).redirect(`/places/index`)
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    db.Place.updateOne(`/places/${req.params.id}`)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
})


module.exports = router