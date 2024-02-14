import React, { useState, useEffect, useRef } from 'react';
import Packery from 'packery';
import imagesLoaded from 'imagesloaded';
import Draggabilly from 'draggabilly';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

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

function Item({ artwork, onRemove, isMdScreen }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClickInfo = (artwork) => {
    localStorage.setItem("selectedArtworkId", artwork.id);
  };

  const handleHeartButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove();
  };

  return (
    <Paper
      className="grid-item"
      style={{ padding: 5, position: 'relative', width: isMdScreen ? '22%' : '47.5%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleButtonClickInfo(artwork)}
    >
      <img src={artwork.iiifAPI} alt={artwork.title} className="pic" style={{ width: '100%' }} />
      {isHovered && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'none', paddingRight:'12px'}}>
          <button type="submit" className="btn btn1" onClick={handleHeartButtonClick}><FaHeart size={32} /></button>
          <Link to={"/details"}><FaCircleInfo size={32} /></Link>
        </div>
      )}
    </Paper>
  );
}

export default FavGallery;