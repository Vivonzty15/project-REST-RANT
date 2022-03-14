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
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = place.comments.map(c => {
            return (
                <div className="border col-sm-4">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <form method="POST" action={`/places/${place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
                </div>
            )
        })
    }

    return (
        <Def>
            <main >
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 '>
                            <h1>{place.name}</h1>
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
                        <div className='col-sm-6 col-md-4'>
                            <img className='showIMG' src={place.pic} alt={place.name} />
                        </div>
                    </div>
                </div>
                <br />
                <div className=' form form-group mx-auto'>
                    <form method="POST" action={`/places/${place.id}/comment`}>
                        <label htmlFor="author">Author</label>
                        <input
                            className="form-control"
                            type="text"
                            name="author"
                        />

                        <label htmlFor="content">Content</label>
                        <input
                            className="form-control"
                            type="text"
                            name="content"
                        />

                        <label htmlFor="stars">Stars</label>
                        <input
                            className="form-control"
                            type="number"
                            name="stars"
                        />


                        <label htmlFor="rant">Rant</label>
                        <input
                            type="checkbox"
                            name="rant"
                        />

                        <br />
                        <input className="align-center btn btn-dark" type="submit" value="submit comment" />
                    </form>
                </div>

            </main>
        </Def>
    )
}

module.exports = Show