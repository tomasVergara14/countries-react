import React, {createContext, useContext, useState} from 'react'

const SearchContext = createContext()

export const useSearchContext = ()=>useContext(SearchContext)

const SearchContextProvider = ({children}) => {

    const [searchCountry, setSearchCountry]= useState({})

    const changesHandler = (event)=>{
        setSearchCountry(
            {...searchCountry,
            [event.target.name]:event.target.value
        })

    }
    console.log(searchCountry)

    return (    
        <SearchContext.Provider
        value={{
            searchCountry,
            changesHandler
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
