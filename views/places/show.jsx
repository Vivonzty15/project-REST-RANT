const React = require('react')
const Def = require('../default')

function Show({ place }) {
    return (
        <Def>
            <main className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <h1>{place.name}</h1>
                        <h4>{place.cuisines}</h4>
                        <p>
                            Located in {place.city}, {place.state}
                        </p>
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
                        <div className='rating'>
                            <p>Not rated yet</p>
                        </div>
                        <div className='comments'>
                            <p>No comments yet</p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <img className='showIMG' src={place.pic} alt={place.name} />
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show