import Carousel from '../components/Carousel';
import SearchForm from '../components/searchForm';
import ArtworkComponent from '../components/ArtworkComponent';

function GalleryHome() {
    return (
        <>
        {/* TODO add search */}
        
       <Carousel /> 
       <ArtworkComponent />
        {/* TODO add search result area */}
        </>
    );
}

export default GalleryHome;
