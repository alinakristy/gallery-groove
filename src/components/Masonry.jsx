import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const Button = styled('button')({
  position: 'absolute',
  bottom: 16,
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '8px 16px',
  background: '#2196f3',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  opacity: 0,
  transition: 'opacity 0.3s',
  pointerEvents: 'none',
  '&:hover': {
    opacity: 1,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let favesArray = [""];

export default function BasicMasonry({ artworks }) {
  const handleButtonClick = (artwork) => {
    
  
    favesArray.push(artwork);

    console.log(favesArray);


    localStorage.setItem("faves", JSON.stringify(favesArray));

  
  
  };

  return (
    <Box sx={{ width: '100%', minHeight: 393 }}>
      <Masonry columns={4} spacing={2} sx={{ width: '100%' }}>
        {artworks.map((artwork, index) => (
          <Item key={index}>
            <img src={artwork.iiifAPI} alt={artwork.title} style={{ width: '100%', height: 'auto' }} />
            <p className="overlay">{artwork.title}</p>
            <p className="overlay">{artwork.artist_display}</p>
            <button type="submit" className="btn" onClick={() => handleButtonClick(artwork)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </button>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
