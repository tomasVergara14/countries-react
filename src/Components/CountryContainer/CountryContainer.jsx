import React, {useEffect, useState} from 'react'
import CountryItem from '../CountryItem/CountryItem'

const url = "https://restcountries.eu/rest/v2/all"
const CountryContainer = () => {

    
    const [country, setCountry]= useState([])

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    console.log(country)
    // {country.map((element, index)=>{
    //     if(index<10){
    //         return(

    //         )
    //     }
    // })}
    return(
        <CountryItem name="hola" flag="" population="2021" continent="oeste" ></CountryItem>
    )
}

export default CountryContainer
