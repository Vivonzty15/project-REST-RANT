const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404 PAGE NOT FOUND</h1>
                <h4 className='text-center'>Oops, sorry, we can't find this page!</h4>
                <img src="/images/404.jpg" alt="404" />
            </main>
        </Def>
    )
}

module.exports = error404