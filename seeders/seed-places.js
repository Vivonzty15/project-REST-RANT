const db = require('./models') // kept getting error "could not find module ../models", also tried ./models

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://cdn.vox-cdn.com/thumbor/D2n8MvnW9SpoP_QJ5IZ2ac8ZdK0=/0x0:2045x1165/1200x800/filters:focal(860x420:1186x746)/cdn.vox-cdn.com/uploads/chorus_image/image/58381661/ChaiYoOfficial.0.jpg',
    founded: 1989,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2021/05/A4196-10-Things-you-should-remember-before-designing-a-coffee-shop.jpg',
    founded: 2020,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

