import React, { useState, useEffect, useRef } from 'react';
import Packery from 'packery';
import imagesLoaded from 'imagesloaded';
import Draggabilly from 'draggabilly';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
//import '../App.css';


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
      <div className="gutter-sizer" style={{ width: isMdScreen ? '4%' : '0.2%' }}></div>
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
      className="grid-item d-flex align-items-center flex-column wrap1"
      style={{  padding: 5,  position: 'relative', width: isMdScreen ? '22%' : '0' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="bound">
      <img src={artwork.iiifAPI} alt={artwork.title} className= "pic"  style={{ width: '100%', height: 'auto' }} />
      <div className='overlay'>
      <h5 className=" card-title my-2 fw-semibold">{artwork.title}</h5>
      <p className="card-text my-2 fst-italic">{artwork.artist_display}</p>
      <div className="d-flex align-items-center flex-row">
      <button type="submit" className="btn btn1" onClick={() => onRemove()}><FaHeart /></button>
      <button type="submit" className="btn btn1" onClick={() => handleButtonClickInfo(artwork)}> <Link to={"/details"}>  <FaCircleInfo /></Link>
      </button>
      </div>
      </div>
      </div>
    </Paper>
   
  );
}

export default FavGallery;