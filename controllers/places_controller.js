const router = require('express').Router()
const db = require('../models/')

// INDEX
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places} )
    })
    .catch(err => {
        console.log(err)
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
            console.log(err)
            res.render('error404')
        })
})

// SHOW
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render(`places/show`, { place } )
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

// CREATE
router.post('/', (req, res) => { 
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    // .catch(err => {
    //     console.log('err', err)
    //     res.render('err404')
    // })
})

// DELETE
router.delete('/:arrayIndex', (req, res) => {
    res.send('DELETE /places/:id stub')
})

// UPDATE
router.put('/:id', (req, res) => {
    db.Place.updateOne(`/places/${req.params.id}`)
        .then(() => {
            res,redirect(`/breads/${req.params.id}`)
        })
})


module.exports = router