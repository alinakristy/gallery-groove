import CarouselApi from '../components/CarouselApi';
import CarouselLocal from '../components/CarouselLocal';
import ArtworkComponent from '../components/ArtworkComponent';
import View from './View';
import artworkInfo from './ArtworkInfo';

function GalleryHome() {
    return (
        <>
       <CarouselApi />
       {/* <CarouselLocal /> */}
       <ArtworkComponent />
        </>
    );
}

export default GalleryHome;
