import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarouselItem from './CarouselItem';

const CarouselApi = () => {
    const [artworks, setArtworks] = useState([]);
    const [callMade, setCallMade] = useState(false);

    useEffect(() => {

        const fetchArtworks = async () => {//
            const artworkLink = `https://api.artic.edu/api/v1/artworks/search?q=golden&page=1&limit=5&fields=id,title,artist_display,image_id,thumbnail`;
            try {
                const response = await axios.get(artworkLink);
                const data = response.data.data;
                const artworksWithIIIF = data.map(artwork => ({
                    ...artwork,
                    iiifAPI: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/pct:50/0/default.jpg`
                }));

                setArtworks(artworksWithIIIF);
                setCallMade(true);
            } catch (error) {
                setCallMade(false);
                console.error(error);
            }
        };

        if (!callMade) {
            fetchArtworks();
        }
    });

    function indexOf(artwork) {
        return artworks.indexOf(artwork);
    }

    function getSlideName(id) {
        return "Slide " + getSlideNumber(id);
    }

    function getSlideNumber(id) {
        return id;
    }

    function getKey(id) {
        return id + 1;
    }

    return (
        <div id="carousel" className="carousel slide w-100 h-50">
            <div className="carousel-indicators">
                {artworks.map((artwork) => {
                    const idx = indexOf(artwork);
                    if (idx == 0) { //first
                        return <button key={getKey(idx)} type="button" data-bs-target="#carousel" data-bs-slide-to={getSlideNumber(idx)} className="active" aria-current="true" aria-label={getSlideName(idx)}></button>
                    } else {
                        return <button key={getKey(idx)} type="button" data-bs-target="#carousel" data-bs-slide-to={getSlideNumber(idx)} aria-label={getSlideName(idx)}></button>
                    }
                })}
            </div>
            <div className="carousel-inner">
                {artworks.map((artwork) => {
                    const idx = indexOf(artwork);

                    return <CarouselItem key={getKey(idx)} id={idx} title={artwork.title} description={artwork.artist_display} image={artwork.iiifAPI} />;


                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselApi;