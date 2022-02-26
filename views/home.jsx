const React = require('react') 
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1 className='text-size-10'><strong>REST-Rant</strong></h1>
                <div className='justify-content-center'>
                    <a href="/places">
                        <button className='btn-dark btn-lg'>Browse Places</button>
                    </a>
                    <a href='/places/new'>
                        <button className='btn-dark btn-lg'> Add Place </button> 
                    </a>
                    <p className='text-center'>Rave about your favorite places, or rant about your least favorite!</p>
                </div>
                <img src="/images/burger.jpg" alt="burger" />
                <p className='text-center'>Photo by <a href="https://unsplash.com/@1ncreased">Lidye</a> on <a href="https://unsplash.com/">Unsplash</a></p>
            </main>
        </Def>
    )
}

module.exports = home