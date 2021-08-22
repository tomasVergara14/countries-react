import React from 'react'
import Title from './Header/Title'
import Logo from './Header/Logo'
import Search from './Search/Search'
import { useSearchContext } from '../../Handlers/Context/SearchContext'

const NavBar = () => {

    const {searchCountry,changesHandler, submitsHandler} =useSearchContext()

    return (
        <div className="NavBar">
            <Title/>
            <Logo/>
            <Search  changes={changesHandler} submits={submitsHandler} countrySearch={searchCountry.countrySearch} />
        </div>
    )
}

export default NavBar
