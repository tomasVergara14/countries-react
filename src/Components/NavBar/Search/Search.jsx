import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = ({countrySearch, changes, submits}) => {
    return (
        <div>
            <form action="" onChange={changes} onSubmit={submits} >
                <input 
                type="text" 
                placeholder="Ex: Argentina"
                name="countrySearch"
                defaultValue={countrySearch}
                />
                <button><FontAwesomeIcon icon={faSearch} /> </button>
            </form>
        </div>
    )
}

export default Search
