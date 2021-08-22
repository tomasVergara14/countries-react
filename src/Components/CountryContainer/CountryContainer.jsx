import React, {useEffect, useState} from 'react'
import CountryItem from '../CountryItem/CountryItem'
import { useSearchContext } from '../../Handlers/Context/SearchContext'


const CountryContainer = () => {

    const [loading]= useState(true)
    const {country, LoadData}= useSearchContext()

    useEffect(()=>{
        LoadData()
    },[])
    
    if(country.length !==0){
        return(
            <div className="CountryContainer">
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
