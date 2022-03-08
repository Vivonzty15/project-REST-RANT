const React = require('react')
const Def = require('../default')

function new_form (data) {
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
            <main className='container-fluid'>
                <h1 className='text-center'>Add a New Place</h1>
                {message}
                <form action='/places' method='POST'>
                    <div className='col-sm-6 col-md-4 col-lg-3 form-group'>
                        <label htmlFor="name">Restaurant Name</label>
                        <input
                            className='form-control'
                            type="text"
                            name="name"
                            id="name"
                            required />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 form-group'>
                        <label htmlFor="pic">Restaurant Picture</label>
                        <input
                            className='form-control'
                            type="url"
                            name="pic"
                            id="pic"/>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 form-group'>
                        <label htmlFor="city">City</label>
                        <input
                            className='form-control'
                            type="text"
                            name="city"
                            id="city" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 form-group'>
                        <label htmlFor="state">State</label>
                        <input
                            className='form-control'
                            type="text"
                            name="state"
                            id="state" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className='form-control'
                            type="text"
                            name="cuisines"
                            id="cuisines"
                            required />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            className="form-control" 
                            id="founded" name="founded" 
                            name="founded"
                            defaultValue={new Date().getFullYear()} />
                        </div>
                    <br/>
                    <input className="align-center btn btn-dark" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form