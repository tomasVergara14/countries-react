import React, {useEffect, useState} from 'react'
import CountryItem from '../CountryItem/CountryItem'
import { useSearchContext } from '../../Handlers/Context/SearchContext'
import './CountryContainer.css'


const CountryContainer = () => {

    const {LoadData, countryResult }= useSearchContext()

    useEffect(()=>{
        LoadData()
    },[])

    if(countryResult.length !== 0){
        return(
            <div className="CountryContainer">
                <div className="CountryMap" id="Result">
                    {countryResult.map((element,index)=>{
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
            <div className="NotFound"> 
                <h3>Enter the name of the country</h3>    
            </div>
        )
    }
    
}

export default CountryContainer
