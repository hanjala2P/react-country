import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
  const [visitedCountries,setVisitedCountries]= useState([]);
  const[visitedFlags,setVisitedFlag]=useState([]);

  const handleVisiteCountries=(country)=>{
    console.log('handleVisiteCountries Click',country);
    const newVisitedCountries =[...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
  }
  const handleVisiteFlag=(flag)=>{
    const newVisitedFlags=[...visitedFlags,flag];
    setVisitedFlag(newVisitedFlags);
  }
    const countriesData = use(countriesPromise);
    const countries= countriesData.countries;
    // console.log(countries)
    return (
        <div>
            <h2>Total Countries : {countries.length}</h2>
            <h3>Total visited Country :{visitedCountries.length}</h3>
            <h3>Total visited flags : {visitedFlags.length}</h3>
            <ol>{
              visitedCountries.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)
              }</ol>
              <div className='visitedFlags'>
                {
                  visitedFlags.map((flag,index)=> <img key={index} src={flag}></img>)
                }
              </div>
          <div  className='countries'>
              {
                countries.map(country=> <Country
                    key={country.cca3.cca3} country={country}
                       handleVisiteCountries={ handleVisiteCountries}
                       handleVisiteFlag={handleVisiteFlag}>
                    </Country>)
            }
          </div>
        </div>
    );
};

export default Countries;