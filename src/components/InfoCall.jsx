import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '../App.css';

const InfoCall = () => {
    const [artworkData, setArtworkData] = useState(null);

    useEffect(() => {
        const selectedArtworkId = localStorage.getItem("selectedArtworkId");

        if (selectedArtworkId) {
            axios.get(`https://api.artic.edu/api/v1/artworks/${selectedArtworkId}`)
                .then(response => {
                    setArtworkData(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching artwork data:', error);
                });
        }
    }, []);

    function getridoftags(string) {



        if ((string === null) || (string === ''))
            return false;
        else
            string = string.toString();
        return string.replace(/<[^>]*>/g, '');


    }

    return (
        <div>
            {artworkData ? (
                <div>

                    <h1>{artworkData.title}</h1>
                    <h5>{artworkData.artist_display}</h5>

                    <img src={`https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`} className="imgdisplay" alt={artworkData.title} />
                    <br></br>
                    <br></br>
                    {getridoftags(artworkData.description)}

                    <br></br>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h3>Medium</h3><p>{artworkData.medium_display}</p></li>
                        <li className="list-group-item"><h3>Dimensions</h3><p>{artworkData.dimensions}</p></li>
                        <li className="list-group-item"><h3>Style</h3><p>{artworkData.style_title}</p></li>
                        <li className="list-group-item"><h3>Category</h3><p>{artworkData.category_titles[0]}</p></li>
                        <li className="list-group-item"><h3>Origin</h3><p>{artworkData.place_of_origin}</p></li>
                        <li className="list-group-item"><h3>Provenance</h3><p> {getridoftags(artworkData.provenance_text)}</p></li>
                        <li className="list-group-item"><h3>Gallery</h3><p> {getridoftags(artworkData.gallery_title)}</p></li>
                        <li className="list-group-item"><h3>Exhibition History</h3><p> {getridoftags(artworkData.exhibition_history)}</p></li>
                    </ul>



                </div>
            ) : (
                <p>Loading artwork data...</p>
            )}
        </div>
    );
};

export default InfoCall;