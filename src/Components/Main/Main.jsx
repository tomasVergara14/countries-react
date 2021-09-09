import React from 'react'
import NavBar from '../NavBar/NavBar'
import CountryContainer from '../CountryContainer/CountryContainer'

import './Main.css'

const Main = () => {
    return (
        <div className="MainContainer">
            <NavBar/>
            <CountryContainer/>
        </div>
    )
}

export default Main
