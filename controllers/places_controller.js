const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index') // render looks for views folder, don't have to specify
})

module.exports = router