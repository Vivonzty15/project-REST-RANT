const router = require('express').Router()
const db = require('../models')

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
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
})

// SHOW
router.get('/:id', (req, res) => {
    db.Place.findOne({_id : req.params.id})
        .populate('comments')
        .then(place => {
            console.log(place.comments)
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


// CREATE PLACE
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
                console.log(err)
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

// CREATE COMMENT
router.post('/:id/comment', (req, res) => {
    console.log('post comment', req.body)
    if (req.body.rant) {
        req.body.rant = true
    }
    else {
        req.body.rant = false
    }
    console.log(req.body)
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                        .catch(err => {
                            console.log('no redirect')
                            res.render('error404')
                        })
                })
                .catch(err => {
                    console.log(err, 'no push')
                    res.render('error404')
                })
        })
        .catch(err => {
            console.log(err, 'no create')
            res.render('error404')
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


module.exports = router