import React, { useEffect } from 'react'
import { useSearchContext } from '../../Handlers/Context/SearchContext'
import CountryItem from '../CountryItem/CountryItem'

const CountryListContainer = () => {

    
    const { LoadData,country }= useSearchContext()
    
    useEffect(()=>{
        LoadData()
    },[])
    console.log(country)
    if(country.length !==0){
        
        return(
            <div className="CountryListContainer">
                {country.map((element, index)=>{
                    if(index<10){
                        return(
                            <CountryItem key={index} name={element.name} flag={element.flag} population={element.population} continent={element.region} />
                        )
                    }
                })}
            </div>
        )
    }else{
        return(
            <p>Chau</p>
        )
    }
    

}

export default CountryListContainer
