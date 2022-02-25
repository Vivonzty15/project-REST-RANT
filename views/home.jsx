const React = require('react') 
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
                <img src="/images/burger.jpg" alt="burger" />
                <div>
                    Photo by <a href="https://unsplash.com/@1ncreased">Lidye</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home