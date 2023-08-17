import stickerData from "../sticker.json";

const Slider = () => {
    return (
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item ">
              <a href="#">
                <img
                  src={"https://static.gamezop.com/rkWfy2pXq0r/wall.png"}
                  className="d-block w-100"
                  alt="Friut Chop"
                />
              </a>
            </div>
            <div className="carousel-item ">
              <a href="#">
                <img
                  src="https://static.gamezop.com/ryN9EGAQa/wall.png"
                  className="d-block w-100"
                  alt="Slap Fest"
                />
              </a>
            </div>
            <div className="carousel-item ">
              <a href="#">
                <img
                  src="https://static.gamezop.com/rkwCYBZuV/wall.png"
                  className="d-block w-100"
                  alt="Furious Speed"
                />
              </a>
            </div>
            <div className="carousel-item ">
              <a href="#">
                <img
                  src="https://static.gamezop.com/SkhljT2fdgb/wall.png"
                  className="d-block w-100"
                  alt="Ludo Game"
                />
              </a>
            </div>
            <div className="carousel-item ">
              <a href="#">
                <img
                  src="https://static.gamezop.com/r1zG1h6m90H/wall.png"
                  className="d-block w-100"
                  alt="Candy Fiesta"
                />
              </a>
            </div>
            <div className="carousel-item ">
              <a href="#">
                <img
                  src="https://static.gamezop.com/BkXW1a__/wall.png"
                  className="d-block w-100"
                  alt="Jimpo Jump"
                />
              </a>
            </div>
            <div className="carousel-item active">
              <a href="#">
                <img
                  src="https://static.gamezop.com/B1jZWUoXUIe/wall.png"
                  className="d-block w-100"
                  alt="Zombie Shooter"
                />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )
}

export default Slider;