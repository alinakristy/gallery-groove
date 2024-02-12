import CarouselApi from '../components/CarouselApi';
// import Carousel from '../components/Carousel';
import ArtworkComponent from '../components/ArtworkComponent';
import View from './View';

function GalleryHome() {
    return (
        <>
       <CarouselApi />
       {/* <Carousel /> */}
       <ArtworkComponent />
        </>
    );
}

export default GalleryHome;
