import CarouselItem from './CarouselItem';
import projects from '../data/projects.json';

function Carousel() {

    function getSlideName(id) {
        return "Slide " + getSlideNumber(id);
    }

    function getSlideNumber(id) {
        return id-1;
    }

    return (
        <div id="carousel" className="carousel slide w-100">
            <div className="carousel-indicators">
                {projects.map((project) => {
                    if (project.id == 1) { //first
                        return <button key={project.id} type="button" data-bs-target="#carousel" data-bs-slide-to={getSlideNumber(project.id)} className="active" aria-current="true" aria-label={getSlideName(project.id)}></button>
                    } else {
                        return <button key={project.id} type="button" data-bs-target="#carousel" data-bs-slide-to={getSlideNumber(project.id)} aria-label={getSlideName(project.id)}></button>
                    }
                })}
            </div>
            <div className="carousel-inner">
                {projects.map((project) => {
                    return <CarouselItem key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} />;
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
}

export default Carousel;
