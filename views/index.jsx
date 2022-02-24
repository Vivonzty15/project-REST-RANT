const React = require('react')
const Default = require('./layouts/Default')

function Index ({places, title})  {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <ul>
            {
                places.map((place, index) => {
                    return (
                    <li key={index}>
                        <a href= {`/breads/${index}`}>
                            {place.name}
                        </a>
                    </li>)
                })
            }
        </ul>
      </Default>
    )
}

module.exports = Index