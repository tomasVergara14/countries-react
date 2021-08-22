import React, {useEffect, useState} from 'react'
import CountryItem from '../CountryItem/CountryItem'
import { useSearchContext } from '../../Handlers/Context/SearchContext'


const CountryContainer = () => {

    const [loading]= useState(true)
    const {LoadData, countryResult }= useSearchContext()

    useEffect(()=>{
        LoadData()
    },[])

    if(countryResult.length !== 0){
        return(
            <div className="CountryContainer">
                <div className="CountryMap">
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
            <div> 
                {loading && <div className="spinner"></div>} 
                <h3>Try again</h3>    
            </div>
        )
    }
    
}

export default CountryContainer
