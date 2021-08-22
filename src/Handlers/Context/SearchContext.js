import React, {createContext, useContext, useState} from 'react'

const SearchContext = createContext()

export const useSearchContext = ()=>useContext(SearchContext)

const SearchContextProvider = ({children}) => {

    const [country, setCountry]= useState([])
    const [searchCountry, setSearchCountry]= useState({})

    const LoadData = async()=>{
        try{
            const url = "https://restcountries.eu/rest/v2/all"
            const data = await (await fetch(url)).json()
            setCountry(data)
        }catch(err){
            console.log(err)
        }
    }
    console.log(country)

    const changesHandler = (event)=>{
        setSearchCountry(
            {...searchCountry,
            [event.target.name]:event.target.value
        })

    }
    console.log(searchCountry)

    const submitsHandler = (event)=>{
        event.preventDefault()
    }

    return (    
        <SearchContext.Provider
        value={{
            country,
            LoadData,
            searchCountry,
            changesHandler
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
