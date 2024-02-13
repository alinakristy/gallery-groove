import React, { useState, useEffect } from 'react';

function FavData() {
  const [faveData, setFaveData] = useState([]);

  useEffect(() => {
    const storedFaves = JSON.parse(localStorage.getItem("faves")) || [];
    setFaveData(storedFaves);
  }, []);

  return (
    <div>
      {faveData.map((element, index) => (
        <div key={index}>
          <img src={element.iiifAPI} alt={element.title} />
          <h3>{element.title}</h3>
          <p>{element.artist_display}</p>
        </div>
      ))}
    </div>
  );
}

export default FavData;
