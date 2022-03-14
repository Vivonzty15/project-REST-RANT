const React = require('react')
const Def = require('../default')

function editPlace({ place }) {
    return (
        <Def>

            <form action={`/places/${place.id}?_method=PUT`} method='POST'>
                <div className='form form-group mx-auto'>
                    <h1>Edit Place</h1>
                    <label htmlFor="name">Restaurant Name</label>
                    <input
                        className='form-control'
                        type="text"
                        name="name"
                        id="name"
                        required
                        defaultValue={place.name} />
                    <label htmlFor="pic">Restaurant Picture</label>
                    <input
                        className='form-control'
                        type="url"
                        name="pic"
                        id="pic"
                        defaultValue={place.pic} />
                    <label htmlFor="city">City</label>
                    <input
                        className='form-control'
                        type="text"
                        name="city"
                        id="city"
                        defaultValue={place.city} />
                    <label htmlFor="state">State</label>
                    <input
                        className='form-control'
                        type="text"
                        name="state"
                        id="state"
                        defaultValue={place.state} />
                    <label htmlFor="cuisines">Cuisines</label>
                    <input
                        className='form-control'
                        type="text"
                        name="cuisines"
                        id="cuisines"
                        required
                        defaultValue={place.cuisines} />
                    <label htmlFor="founded">Founded</label>
                    <input className="form-control"
                        id="founded"
                        name="founded"
                        value={place.founded}
                    />
                    <br />
                    <input className="btn btn-dark" type="submit" value="Update Place" />
                </div>
            </form>
        </Def>
    )
}

module.exports = editPlace