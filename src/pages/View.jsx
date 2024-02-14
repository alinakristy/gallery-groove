import React from 'react';
import FavGallery from '../components/FavGallery';

function View() {
  return (
    <div>
      <div className="marginclass">
        <h2 style={{ marginTop: '30px' }}>Your Art Gallery:</h2>
        <p style={{ marginBottom: '30px' }}>Drag and Drop your favourite artworks to create your very own Wall-of-Art!</p>

      </div>  
      <div>
        <hr />
        <FavGallery />
      </div>
    </div>
  );
}

export default View;
