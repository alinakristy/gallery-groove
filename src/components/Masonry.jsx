import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Link } from 'react-router-dom';

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: '20px',
});

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
  const [favesArray, setFavesArray] = React.useState([]);
  const [messageMap, setMessageMap] = React.useState({});
  const [selectedArtworkId, setSelectedArtworkId] = React.useState(null);

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

  return (
    <Container>
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2} sx={{ width: '100%' }}>
        {artworks.map((artwork, index) => (
          <Item key={index}>
            <img src={artwork.iiifAPI} alt={artwork.title} style={{ width: '100%', height: 'auto' }} />
            <h5 className="overlay card-title mt-3 mx-3 fw-semibold">{artwork.title}</h5>
            <p className="overlay card-text my-2 mx-3  fst-italic">{artwork.artist_display}</p>
            <button type="submit" className="btn" onClick={() => handleButtonClick(artwork)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </button>
            <button type="submit" className="btn" onClick={() => handleButtonClickInfo(artwork)}> 
              <Link to={"details"}>  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
              </Link>
            </button>
            {messageMap[artwork.id] && (
              <div>{messageMap[artwork.id]}</div>
            )}
          </Item>
        ))}
      </Masonry>
    </Container>
  );
}