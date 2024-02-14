import CarouselApi from '../components/CarouselApi';
import CarouselLocal from '../components/CarouselLocal';
import ArtworkComponent from '../components/ArtworkComponent';
import View from './View';
import artworkInfo from './ArtworkInfo';
import '../App.css';

function GalleryHome() {
    return (
        <>
       <CarouselApi />
       <h1 className="center">Gallery Groove</h1>
    
       {/* <CarouselLocal /> */}
       <ArtworkComponent />
        </>
    );
}

export default GalleryHome;
