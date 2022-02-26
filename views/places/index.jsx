const React = require('react')
const Def = require('../default')

function places ({places}) {
    let placesFormatted = places.map((place, index) => { 
        return (
            <div className='col-sm-6 pt-5'>
                <a href={`/places/${index}`}> <h2 className='text-center'>{place.name}</h2></a>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <nav className='navbar navbar-inverse'>
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <a className='navbar-brand' href='/'>REST-rant</a>
                        </div>
                    </div>
                </nav>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = places