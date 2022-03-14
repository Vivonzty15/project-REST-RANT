const React = require('react')
const Def = require('../default')

function new_form(data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
            <main>
                <form action='/places' method='POST'>
                    <div className='form form-group mx-auto'>
                        <h1 className='text-center'>Add a New Place</h1>
                        {message}

                        <label htmlFor="name">Restaurant Name</label>
                        <input
                            className='form-control'
                            type="text"
                            name="name"
                            id="name"
                            required />

                        <label htmlFor="pic">Restaurant Picture</label>
                        <input
                            className='form-control'
                            type="url"
                            name="pic"
                            id="pic" />

                        <label htmlFor="city">City</label>
                        <input
                            className='form-control'
                            type="text"
                            name="city"
                            id="city" />

                        <label htmlFor="state">State</label>
                        <input
                            className='form-control'
                            type="text"
                            name="state"
                            id="state" />

                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className='form-control'
                            type="text"
                            name="cuisines"
                            id="cuisines"
                            required />

                        <label htmlFor="founded">Founded Year</label>
                        <input
                            className="form-control"
                            id="founded"
                            name="founded"
                            defaultValue={new Date().getFullYear()} />

                        <br />
                        <input className="align-center btn btn-dark" type="submit" value="Add Place" />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form