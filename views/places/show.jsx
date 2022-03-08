const React = require('react')
const Def = require('../default')

function Show({ place }) {
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
                            <h3 className='sub-text'>No comments yet</h3>
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