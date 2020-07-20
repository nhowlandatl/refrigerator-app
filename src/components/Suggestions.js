import React from 'react'

const Suggestions = (props) => {
    return (
      <div>
        {props.results.map(result => {
            // Axios button function to get recipe info based on recipe ID
            return (
            <p>
                {result.title}
            </p>
            )
        })}
      </div>
    )
}

export default Suggestions