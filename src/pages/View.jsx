import React from 'react';

function View() {
  let faveData = [];
  faveData = JSON.parse(localStorage.getItem("faves")) || [];
  console.log(faveData);

  return (
    <div>
      {faveData.map((element, index) => (
        <div key={index}>
          <img src={`https://www.artic.edu/iiif/2/${element.image_id}/full/843,/0/default.jpg`} alt={element.title} />
          <h3>{element.title}</h3>
          <p>{element.artist_display}</p>
        </div>
      ))}
    </div>
  );
}

export default View;