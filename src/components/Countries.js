import React, { useEffect, useState } from 'react';
import Card from './Card';
import Search from './Search';

const Countries = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries); 

  const url = "https://restcountries.com/v3.1/all";

  const FetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data); 
      setLoading(false);
      setError(null);
      console.log(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData(url);
  }, []);

  const loadingMessage = <h2>Data is loading...</h2>;
  const errorMessage = <h2>{error}</h2>;

  const removeHandler=(name)=>{
    const filter = filterCountries.filter((country)=> country.name.common !== name);
    setFilterCountries(filter); 
  }

  const searchHandler = (searchData) =>{
    let value = searchData.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value); 
    }); 
    setFilterCountries(newCountries)
  };

  return (
    <div>
      <div id="header-div">
        <h1 id="heading-title">Where is your Country?</h1>
        <Search onSearch={searchHandler}/>
        </div>
        <div>
      {isLoading && loadingMessage}
      {error && errorMessage}
      {filterCountries.map((countriesData, index) => (
        <Card
          key={index}
          flag={countriesData.flags.png}
          countryName={countriesData.name.common}
          onRemoveCountry={removeHandler}
        />
      ))}
    </div>
    </div>
   
  );
};

export default Countries;
