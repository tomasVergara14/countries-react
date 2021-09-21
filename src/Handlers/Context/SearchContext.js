import React, {createContext, useContext, useState} from 'react'

const SearchContext = createContext()

export const useSearchContext = ()=>useContext(SearchContext)

const SearchContextProvider = ({children}) => {

    const [country, setCountry]= useState([])
    const [searchCountry, setSearchCountry]= useState({})
    const [countryResult, setCountryResult]= useState([])

    const LoadData = async()=>{
        try{
            const url = "https://restcountries.eu/rest/v2/all"
            const data = await (await fetch(url)).json()
            setCountry(data)
        }catch(err){
            console.log(err)
        }
    }

    const changesHandler = (event)=>{
        setSearchCountry(
            {...searchCountry,
            [event.target.name]:event.target.value
        })

    }
    
    const string = searchCountry.countrySearch
    
    console.log(string)
    
    // const lower = string.toLowerCase()
    // console.log(lower)

    // const firstLetter = string.charAt(0)
    // console.log(firstLetter)

    // const upper = firstLetter.toUpperCase()
    // console.log(upper)

    // const rest = string.slice(1)
    // console.log(rest)

    // const capitlize = upper + 

    const filterCountrySearch = country.filter(countryName=>  countryName.name === searchCountry.countrySearch)

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
