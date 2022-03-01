const React = require('react') 
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1 className='text-size-10 justify-content-center'><strong>REST-Rant</strong></h1>
                <div className='justify-content-center'>
                    <p className='text-center'>Rave about your favorite places, or rant about your least favorite!</p>
                </div>
                <img className='homeIMG' src="/images/burger.jpg" alt="burger" />
                <p className='text-center'>Photo by <a href="https://unsplash.com/@1ncreased">Lidye</a> on <a href="https://unsplash.com/">Unsplash</a></p>
            </main>
        </Def>
    )
}

module.exports = home