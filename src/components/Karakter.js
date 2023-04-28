// Karakter bileşeniniz buraya gelecek

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
  const [karakter, setKarakter] = useState([]);



  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setKarakter(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <h1>Star Wars Karakterleri</h1>
      <ul>
        {karakter.map(item => (
          <li key={item.name}>{item.name}</li>        ))}
      </ul>
      
    </div>
  );
}

export default CharacterList;