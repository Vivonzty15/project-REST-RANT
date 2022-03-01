const React = require('react')
const Def = require('../default')

function Show ({place, index}) {
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <h4>{place.cuisines}</h4>
                <p>
                    Located in {place.city}, {place.state}
                </p>
                <img className='showIMG' src={place.pic} alt={place.name} />
                <a href={`/places/${index}/edit`} className="btn btn-warning"> 
                    Edit
                </a> 
                <form method='POST' action={`/places/${index}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>     
                <div className='rating'>
                    <p>Not rated yet</p>
                </div>
                <div className='comments'>
                    <p>No comments yet</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show