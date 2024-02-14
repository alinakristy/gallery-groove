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
      return <FaHeart size={32} />;
    } else {
      return <CiHeart size={32} />;
    }

  }

  const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  });

  return (
    <Container>
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2} sx={{ width: '100%' }}>
        {artworks.map((artwork, index) => (
          <Item key={index}>
            <img src={artwork.iiifAPI} alt={artwork.title} style={{ width: '100%', height: 'auto' }} />
            <div className="my-3">
              <h5 className="overlay card-title mt-8 mx-3 fw-semibold">{artwork.title}</h5>
              <p className="overlay card-text my-2 mx-3  fst-italic">{artwork.artist_display}</p>
              <button type="submit" className="btn" onClick={() => handleButtonClick(artwork)}>{showFavIcon(artwork)}</button>
              <button type="submit" className="btn" onClick={() => handleButtonClickInfo(artwork)}> <Link to={"details"}> <FaCircleInfo size={32} /> </Link></button>

              {messageMap[artwork.id] && (
                <div>{messageMap[artwork.id]}</div>
              )}
            </div>
          </Item>
        ))}
      </Masonry>
    </Container>
  );
}
