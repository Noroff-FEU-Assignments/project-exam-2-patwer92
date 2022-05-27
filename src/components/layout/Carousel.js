import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function HomeCarousel() {
  return (
    <Carousel controls={false} fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img carousel_img--first"
          src="images/home-slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel__caption">
          <h2 className="carousel__caption-title">Vi hjelper deg med dine hudpleierutiner</h2>
          <a href="#main__first-carousel" className="btn btn--primary mt-4">
            LES MER
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img carousel__img--second"
          src="images/home-slide2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel__caption">
          <h2 className="carousel__caption-title">Få sminkøren levert på døren</h2>
          <Link to="/treatments" className="btn btn--primary mt-4">
            LES MER
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img carousel__img--third"
          src="images/home-slide3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel__caption">
          <h2 className="carousel__caption-title">Se vårt utvalg av produkter</h2>
          <a href="#main__second-carousel" className="btn btn--primary mt-4">
            LES MER
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
