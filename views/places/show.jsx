const React = require('react')
const Def = require('../default')

function Show({ place }) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not Yet Rated
        </h3>
    )
    if (place.comments.length) {
        let sumRatings = place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ''
        for (let i = 0; i< averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                </div>
            )
        })
    }

    return (
        <Def>
            <main className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <h1>{place.name}</h1>
                        <div className='rating'>
                            <h2 className='subtitle' >Rating</h2>
                            <h3 className='sub-text'>Not rated yet</h3>
                        </div>
                        <h2 className='subtitle'>Description</h2>
                        <h3 className='sub-text'>{place.showEstablished()}</h3>
                        <div className='row'>
                            <a href={`/places/${place.id}/edit`} className="btn btn-dark btn-sm">
                                Edit
                            </a>
                            <form method='POST' action={`/places/${place.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-light">
                                    Delete
                                </button>
                            </form>
                        </div>
                        <div className='comments'>
                            <h2 className='subtitle'>Comments</h2>
                            <h3 className='sub-text'>{comments}</h3>
                            <h2 className='subtitle' >Rating</h2>
                            <h3 className='sub-text'>{rating}</h3>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <img className='showIMG' src={place.pic} alt={place.name} />
                    </div>
                </div>
                <div className='col-md'>
                    <form method="POST" action={`/places/${place.id}/comment`}>
                        <label htmlFor="author">
                            <input
                                type="text"
                                name="author"
                            />
                        </label>
                        <label htmlFor="content">
                            <input
                                type="text"
                                name="content"
                            />
                        </label>
                        <label htmlFor="stars">
                            <input
                                type="number"
                                name="stars"
                            />

                        </label>
                        <label htmlFor="rant">
                            <input
                                type="checkbox"
                                name="rant"
                            />
                        </label>
                        <br />
                        <input className="btn btn-dark" type="submit" value="submit comment" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show