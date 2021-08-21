import React from 'react'

const CountryItem = ({name, flag, population, continent}) => {
    return (
        <div>
            <h2>{name} </h2>
            <div>
                <img src={flag} alt="imagen" />
                <h3>{continent} </h3>
                <h3>{population} </h3>
            </div>
        </div>
    )
}

export default CountryItem
