const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Olive Garden',
        city: 'Wichita',
        state: 'KS',
        cuisines: 'Italian food',
        pic: 'https://media.olivegarden.com/en_us/images/marketing/italian-family-restaurant-olive-garden-g6-rdv.jpg'
    }, {
        name: 'McDonald\'s',
        city: 'Hutchinson',
        state: 'KS',
        cuisines: 'American fast food',
        pic: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1&resize=640%2C360'
    }

    ]
    res.render('places/index', { places }) // render looks for views folder, don't have to specify
})

module.exports = router