const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <div className="backButton float-right">
                    <a href="/places"><button className='btn btn-dark'>back to places</button></a>
                </div>
                <form action='/places' method='POST'>
                    <div className='form-group'>
                        <label htmlFor="name">Restaurant Name</label>
                        <input
                            className='form-control'
                            type="text"
                            name="name"
                            id="name"
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Restaurant Picture</label>
                        <input
                            className='form-control'
                            type="url"
                            name="pic"
                            id="pic"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input
                            className='form-control'
                            type="text"
                            name="city"
                            id="city" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <input
                            className='form-control'
                            type="text"
                            name="state"
                            id="state" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className='form-control'
                            type="text"
                            name="cuisines"
                            id="cuisines"
                            required />
                    </div>
                    <br/>
                    <input className="btn btn-dark" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form