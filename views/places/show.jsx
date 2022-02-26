const React = require('react')
const Def = require('../default')

function Show ({place}) {
    return (
        <Def>
            <main>
                <a className="align-items-right" href="/places"><button className='btn btn-dark'>back to places</button></a>
                <h1>{place.name}</h1>
                <h4 className='text-center'>{place.cuisines}</h4>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
                <img src={place.pic} alt={place.name} />
            </main>
        </Def>
    )
}

module.exports = Show