import React from 'react'
import './Search.css';

const Search = ({onSearch}) => {

  const searchHandler = (e) =>{
     onSearch(e.target.value); 
  }

  return (
    <div id="searchDiv">
        <h1 id='search-title'>Search Country as Name : </h1>
       <input type='text' id="searchBox" onChange={searchHandler} />
    </div>
  )
}

export default Search
