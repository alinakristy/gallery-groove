import React, { useState, useEffect, useRef } from 'react';
import Packery from 'packery';
import imagesLoaded from 'imagesloaded';
import Draggabilly from 'draggabilly';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

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
          artwork={element}
          onRemove={() => handleRemoveButtonClick(element.id)}
          isMdScreen={isMdScreen}
        />
      ))}
    </div>
  );
}



//Img Item in Gallery
function Item({ artwork, onRemove, isMdScreen }) {
  const [isHovered, setIsHovered] = useState(false);
  const touchStartTime = useRef(null);
  const [selectedArtworkId, setSelectedArtworkId] = React.useState(null);

  const handleTouchStart = () => {
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = () => {
    if (Date.now() - touchStartTime.current < 500) {
      setIsHovered(true);
    }
  };

  const handleButtonClickInfo = (artwork) => {
    setSelectedArtworkId(artwork.id);
    localStorage.setItem("selectedArtworkId", artwork.id);
  };

  return (
    <Paper
      className="grid-item d-flex align-items-center flex-column"
      style={{ padding: 5, position: 'relative', width: isMdScreen ? '22%' : '47.5%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img src={artwork.iiifAPI} alt={artwork.title} style={{ width: '100%', height: 'auto' }} />
      <h5 className="overlay card-title my-2 fw-semibold">{artwork.title}</h5>
      <p className="overlay card-text my-2 fst-italic">{artwork.artist_display}</p>
      <div className="d-flex align-items-center flex-row">
      <button type="submit" className="btn" onClick={() => onRemove()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
        </svg>
      </button>
      <button type="submit" className="btn" onClick={() => handleButtonClickInfo(artwork)}> <Link to={"/details"}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </svg> </Link>
      </button>
      </div>
    </Paper>
  );
}

export default FavGallery;