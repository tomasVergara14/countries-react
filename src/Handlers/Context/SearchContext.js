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

    const lower = searchCountry.toLowerCase()
    const first = lower.chartAt(0)
    const rest = lower.slice(1)
    const upper = first.toUpperCase()
    const capitalize = upper + rest


    const filterCountrySearch = country.filter(countryName=> countryName.name ===  capitalize.countrySearch)

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
