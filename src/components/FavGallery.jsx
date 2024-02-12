import React, { useState, useEffect, useRef } from 'react';
import Packery from 'packery';
import imagesLoaded from 'imagesloaded';
import Draggabilly from 'draggabilly';
import { Paper, useMediaQuery, useTheme } from '@mui/material';

function FavGallery() {
  const [faveData, setFaveData] = useState([]);
  const gridRef = useRef(null);
  const packeryRef = useRef(null);
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const storedFaves = JSON.parse(localStorage.getItem("faves")) || [];
    setFaveData(storedFaves);
  }, []);

  useEffect(() => {
    const gridElement = gridRef.current;
    const pckry = new Packery(gridElement, {
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
    });
    packeryRef.current = pckry;

    imagesLoaded(gridElement).on('progress', () => pckry.layout());

    pckry.getItemElements().forEach(itemElem => {
      const draggie = new Draggabilly(itemElem);
      pckry.bindDraggabillyEvents(draggie);
    });

    return () => pckry.destroy();
  }, [faveData]);

  const handleRemoveButtonClick = (artworkId) => {
    const updatedFavesArray = faveData.filter(item => item.id !== artworkId);
    setFaveData(updatedFavesArray);
    localStorage.setItem("faves", JSON.stringify(updatedFavesArray));
  };

  return (
    <div ref={gridRef} className="grid">
      <div className="grid-sizer" style={{ width: isMdScreen ? '22%' : '49.90%' }}></div>
      <div className="gutter-sizer" style={{ width: isMdScreen ? '4%' : '0.1%' }}></div>
      {faveData.map((element, index) => (
        <Item 
          key={index} 
          faveData={element} 
          onRemove={() => handleRemoveButtonClick(element.id)} 
          isMdScreen={isMdScreen}  
        />
      ))}
    </div>
  );
}



//Img Item in Gallery
function Item({ faveData, onRemove, isMdScreen }) {
  const [isHovered, setIsHovered] = useState(false);
  const touchStartTime = useRef(null);

  const handleTouchStart = () => {
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = () => {
    if (Date.now() - touchStartTime.current < 500) {
      setIsHovered(true);
    }
  };

  return (
    <Paper 
      className="grid-item" 
      style={{ padding: 5, position: 'relative', width: isMdScreen ? '22%' : '47.5%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img src={faveData.iiifAPI} alt={faveData.title} style={{ width: '100%' }} />
      {isHovered && (
        <button
          style={{ position: 'absolute', top: 5, right: 5 }}
          onClick={() => onRemove()}
        >
          x
        </button>
      )}
    </Paper>
  );
}

export default FavGallery;