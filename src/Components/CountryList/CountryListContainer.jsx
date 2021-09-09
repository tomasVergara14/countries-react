import React, { useEffect } from 'react'
import { useSearchContext } from '../../Handlers/Context/SearchContext'
import { NavLink } from 'react-router-dom'
import './CountryListContainer.css'

const CountryListContainer = () => {

    
    const { LoadData,country }= useSearchContext()
    
    useEffect(()=>{
        LoadData()
    },[])
    console.log(country)
    if(country.length !==0){
        
        return(
            <div className="CountryListContainer">
                
                <h3>Names of the Countries</h3>
                {country.map((element, index)=>{
                   return(
                       <div key={index} className="CountryLinksContainer">
                           <NavLink className="CountryLink"  to={`/detail/${element.name}`}  >{element.name}</NavLink>
                       </div>
                       
                   )
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
