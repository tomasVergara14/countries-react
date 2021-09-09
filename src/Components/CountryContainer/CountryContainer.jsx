import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import CountryItem from '../CountryItem/CountryItem'
import { useSearchContext } from '../../Handlers/Context/SearchContext'
import './CountryContainer.css'


const CountryContainer = () => {

    const {LoadData, country, countryResult }= useSearchContext()
    const {id}=useParams()

    useEffect(()=>{
        LoadData()
    },[])

     const countryFilter = country.filter(element=> element.name === id)
     console.log(countryFilter)


     if(countryResult.length !== 0 && countryFilter.length ===0 ){
        return(
            <div className="CountryContainer">
                <div className="CountryMap" id="Result">
                {countryResult.map((element,index)=>{
                        return(
                    <CountryItem key={element.name} name={element.name} flag={element.flag} population={element.population} continent={element.region} />
                    )
                })}
                </div>
            </div>
        )
    } else if(countryFilter.length !== 0){
        return(
            <div className="CountryContainer">
                <div className="CountryMap" id="Result">
                    {countryFilter.map((element,index)=>{
                        return(
                            <CountryItem key={index} name={element.name} flag={element.flag} population={element.population} continent={element.region} />
                        )
                    })}
                </div>
            </div>
        )
    }else{
        return(
            <div className="NotFound"> 
                <h3>Find your country</h3>    
            </div>
        )
    }
    

}

export default CountryContainer
