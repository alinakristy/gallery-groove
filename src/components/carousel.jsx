function Carousel() {

    return (
        <div id="carousel" className="carousel slide w-100">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://www.pacegallery.com/media/images/90123_banner.width-2000.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bolder text-white fs-1 carousel-outline-text">Glenn Kaino</h5>
                        <p className="fw-bold text-white fs-2 carousel-outline-text">Walking with a Tiger</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://www.pacegallery.com/media/images/88222_banner.width-2000.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bolder text-white fs-1 carousel-outline-text">Mika Tajima</h5>
                        <p className="fw-bold text-white fs-2 carousel-outline-text">Energetics</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.pacegallery.com/media/images/86524_Wesley_COMP04-High_Resolution___300_dp.width-2000.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bolder text-white fs-1 carousel-outline-text">John Wesley</h5>
                        <p className="fw-bold text-white fs-2 carousel-outline-text">WesleyWorld: Works on Paper and Objects 1961-2004</p>
                    </div>
                </div>
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
