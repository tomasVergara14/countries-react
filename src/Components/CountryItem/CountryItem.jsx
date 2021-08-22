import React from 'react'
import './CountryItem.css'

const CountryItem = ({name, flag, population, continent}) => {
    return (
        <div className="CountryItemContainer">
            <h2>{name} </h2>
            <div className="CountryItemDetails">
               <div className="ImageContainer"><img className="ItemDetail" src={flag} alt="imagen" /> </div> 
                <h3 className="ItemDetail">Region: {continent} </h3>
                <h3 className="ItemDetail">Population: {population} </h3>
            </div>
        </div>
    )
}

export default CountryItem
