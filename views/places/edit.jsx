const React = require('react')
const Def = require('../default')

function editPlace({place, index}) {
    return (
        <Def>
            <h1>EDIT PAGE</h1>
            <form action={`/places/${index}?_method=PUT`} method='POST'>
                <div className='form-group'>
                    <label htmlFor="name">Restaurant Name</label>
                    <input
                        className='form-control'
                        type="text"
                        name="name"
                        id="name"
                        required 
                        defaultValue={place.name}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="pic">Restaurant Picture</label>
                    <input
                        className='form-control'
                        type="url"
                        name="pic"
                        id="pic" 
                        defaultValue={place.pic}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="city">City</label>
                    <input
                        className='form-control'
                        type="text"
                        name="city"
                        id="city" 
                        defaultValue={place.city}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="state">State</label>
                    <input
                        className='form-control'
                        type="text"
                        name="state"
                        id="state" 
                        defaultValue={place.state}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input
                        className='form-control'
                        type="text"
                        name="cuisines"
                        id="cuisines"
                        required 
                        defaultValue={place.cuisines}/>
                </div>
                <br />
                <input className="btn btn-dark" type="submit" value="Edit place" />
            </form>
        </Def>
    )
}

module.exports = editPlace