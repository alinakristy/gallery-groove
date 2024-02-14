import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Link, Route, Routes } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCircleInfo } from "react-icons/fa6";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

export default function BasicMasonry({ artworks }) {
  const [favesArray, setFavesArray] = React.useState(getCurrentFavItems());
  const [messageMap, setMessageMap] = React.useState({});
  const [selectedArtworkId, setSelectedArtworkId] = React.useState(null);


  function getCurrentFavItems() {
    return JSON.parse(localStorage.getItem("faves")) || [];
  }

  const handleButtonClick = (artwork) => {

  

    
    // Checking if artwork exists
    if (!favesArray.some(item => item.id === artwork.id)) {
      const updatedFavesArray = [...favesArray, artwork];
      setFavesArray(updatedFavesArray);
      const mergedFavesArray = JSON.parse(localStorage.getItem("faves")) || [];
      if (!mergedFavesArray.some(item => item.id === artwork.id)) {
        localStorage.setItem("faves", JSON.stringify([...mergedFavesArray, artwork]));
      }
      setMessageMap({ ...messageMap, [artwork.id]: 'Added to favorites' });
    } else {
      setMessageMap({ ...messageMap, [artwork.id]: 'Already in favorites' });
    }
  };

  const handleButtonClickInfo = (artwork) => {
    setSelectedArtworkId(artwork.id);
    localStorage.setItem("selectedArtworkId", artwork.id);
  };

  function showFavIcon(artwork) {
    if (favesArray.some(item => item.id === artwork.id)) {
      return <FaHeart size={20} />;
    } else {
      return <CiHeart size={20} />;
    }

  }

  const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  });

  return (
    <div className = "wrap">
      

        <Masonry columns={{ xs: 2, sm: 2, md: 4 }} spacing={3} sx={{ width: '100%' }}>
          {artworks.map((artwork, index) => (

            <Item key={index}>
              <div className="bound">
                <img src={artwork.iiifAPI} alt={artwork.title} className="pic" style={{ width: '100%', height: 'auto' }} />
                <div className='overlay'>
                  <h5 className="card-title my-2 fw-semibold">{artwork.title}</h5>
                  <p className=" card-text my-2 fst-italic">{artwork.artist_display}</p>
                  <div className="btnalign">
                    <button type="submit" className="btn btn1" onClick={() => handleButtonClick(artwork)}>{showFavIcon(artwork)}</button>
                    <button type="submit" className="btn btn1" onClick={() => handleButtonClickInfo(artwork)}> <Link to={"details"}> <FaCircleInfo size={22} /> </Link></button>
                  </div>
                  {messageMap[artwork.id] && (
                    <div>{messageMap[artwork.id]}</div>

                  )}
                </div>
              </div>
            </Item>

          ))}
        </Masonry>

      
    </div>
  );
}