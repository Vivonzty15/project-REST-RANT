const React = require('react')
const Def = require('../default')

function places ({places}) {
    let placesFormatted = places.map((place, index) => { 
        return (
            <div key={places.name} className='col-sm-6 pt-5'>
                <a className="text-decoration-none" href={`/places/${index}`}> 
                    <h2 className='text-center'>{place.name}</h2>
                </a>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img className='indexIMG' src={place.pic} alt={place.name} />
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1 className='text-center'>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = places