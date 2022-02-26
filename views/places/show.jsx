const React = require('react')
const Def = require('../default')

function Show ({place}) {
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <h4 className='text-center'>{place.cuisines}</h4>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </main>
        </Def>
    )
}

module.exports = Show