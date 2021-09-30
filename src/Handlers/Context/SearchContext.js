import React, {createContext, useContext, useState} from 'react'

const SearchContext = createContext()

export const useSearchContext = ()=>useContext(SearchContext)

const SearchContextProvider = ({children}) => {

    const [country, setCountry]= useState([])
    const [searchCountry, setSearchCountry]= useState({})
    const [countryResult, setCountryResult]= useState([])

    const LoadData = async()=>{
        try{
            const url = "https://restcountries.com/v3.1/all"
            const data = await (await fetch(url)).json()
            setCountry(data)
        }catch(err){
            console.log(err)
        }
    }
    console.log(country.name)

    const changesHandler = (event)=>{
        setSearchCountry(
            {...searchCountry,
            [event.target.name]:event.target.value
        })

    }
    
    const inputSearch = searchCountry.countrySearch

    const filterCountrySearch = country.filter(countryName=>  countryName.name.common === inputSearch)

    
    console.log(filterCountrySearch)

    const submitsHandler = (event)=>{
        event.preventDefault()
        setCountryResult(filterCountrySearch)
    }


    return (    
        <SearchContext.Provider
        value={{
            countryResult,
            country,
            LoadData,
            searchCountry,
            changesHandler,
            submitsHandler
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
