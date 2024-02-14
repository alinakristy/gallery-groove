import React from 'react';
import FavGallery from '../components/FavGallery';
import '../App.css';

function View() {
  return (
    <div>
    <h1 className="center">Your Gallery</h1>
    <hr></hr>
    <FavGallery />
    </div>
  );
}

export default View;
