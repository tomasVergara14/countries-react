import React, {useEffect, useState} from 'react'
import CountryItem from '../CountryItem/CountryItem'

const url = "https://restcountries.eu/rest/v2/all"
const CountryContainer = () => {

    
    const [country, setCountry]= useState([])
    const [loading]= useState(true)

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    if(country.length !==0){
        return(
            <div className="CountryContainer">
                <h3>Countries</h3>
                <div className="CountryMap">
                    {country.map((element,index)=>{
                        if(index<2){
                            return(
                                <CountryItem key={index} name={element.name} flag={element.flag} population={element.population} continent={element.region} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }else{
        return(
            <div> {loading && <div className="spinner"></div>} </div>
        )
    }
    
}

export default CountryContainer
