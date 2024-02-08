import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry({ artworks }) {
  return (
    <Box sx={{ width: '100%', minHeight: 393 }}> 
      <Masonry columns={4} spacing={2} sx={{ width: '100%' }}> 
        {artworks.map((artwork, index) => (
          <Item key={index}>
            <img src={artwork.iiifAPI} alt={artwork.title} style={{ width: '100%', height: 'auto' }} />
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
