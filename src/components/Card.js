import React from 'react';
import './Card.css';

const Card = ({ flag, countryName,onRemoveCountry}) => {

  const deleteHandler=(name)=>{
    onRemoveCountry(name);
  }

  return (
    <div class="cardFrame">
       <div class="card">
        <img src={flag} alt="Country" class="card-img" />
        <h2 className="card-title">{countryName}</h2>
        <button id='btnDelete' onClick={()=>{
          deleteHandler(countryName)
        }}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
