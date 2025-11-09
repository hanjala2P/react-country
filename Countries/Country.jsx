import React, { useState } from 'react';
import Countries from './Countries';
const Country = ({country, handleVisiteCountries,handleVisiteFlag}) => {
    const [visited,setVisited]=useState(false);
    // console.log( handleVisiteCountries);
    const handleVisite=()=>{
    //    if(visited){
    //     setVisited(false);
    //    }
    //    else{
    //     setVisited(true)
    //    }

    // other way to toggle
    // setVisited(visited? false:true);

    // another way to toggle
    setVisited(!visited);
    handleVisiteCountries(country);
 
    }
    return (
        <div className={`country ${visited && 'countriesVisited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name :{country.name.common}</h3>
            <p>Populations : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area>300000? "Big Country": 'Small Country'}</p>
            <button onClick={handleVisite}>{visited?'Visited':'Not Visited'}</button>
            <button onClick={()=>{handleVisiteFlag(country?.flags?.flags?.png)}}>Add Visited Flag</button>          
        </div>
    )
};

export default Country;