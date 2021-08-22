import React from 'react'
import Title from './Header/Title'
import Logo from './Header/Logo'
import Search from './Search/Search'
import { useSearchContext } from '../../Handlers/Context/SearchContext'

const NavBar = () => {

    const {searchCountry,changesHandler} =useSearchContext()

    return (
        <div className="NavBar">
            <Title/>
            <Logo/>
            <Search  changes={changesHandler} submits="" countrySearch={searchCountry.countrySearch} />
        </div>
    )
}

export default NavBar
