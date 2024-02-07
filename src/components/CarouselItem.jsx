function CarouselItem(props) {

    function description() {
        return props.title + " Image";
    }

    function firstOrNotClass() {
        return props.id == 1 ? "carousel-item active" : "carousel-item";
    }

    return ( <div className={firstOrNotClass()} data-bs-interval="10000">
                    <img src={props.image} className="d-block w-100" alt={description()} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bolder text-white fs-1 carousel-outline-text">{props.title}</h5>
                        <p className="fw-bold text-white fs-2 carousel-outline-text">{props.description}</p>
                    </div>
                </div>
    );
}

export default CarouselItem;
