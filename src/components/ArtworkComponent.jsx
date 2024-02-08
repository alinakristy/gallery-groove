import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BasicMasonry from './Masonry';
import SearchForm from './searchForm';

const ArtworkComponent = () => {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArtworks = async () => {
      const chicagolink = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,artist_display,date_end,title,image_id&limit=20`;

      try {
        const response = await axios.get(chicagolink);
        const data = response.data.data;
        const artworksWithIIIF = data.map(artwork => ({
          ...artwork,
          iiifAPI: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
        }));
        setArtworks(artworksWithIIIF);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtworks();
  }, [searchTerm]);

  const handleSearch = (searchArt) => {
    setSearchTerm(searchArt);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <BasicMasonry artworks={artworks} />
    </div>
  );
};

export default ArtworkComponent;