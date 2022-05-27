import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FeaturedProductItem({ id, title, image, price }) {
  return (
    <figure className="card__image-block">
      <h2 className="card__title">{title}</h2>
      <img className="card__image" src={image} alt="" />
      <figcaption className="card__caption">
        <h3 className="card__caption-title ">Kr {price},-</h3>
        <div className="card__link-wrapper">
          <Link to={`product/details/${id}`} className="card__button btn btn--tertiary">
            KJØP
          </Link>
          <Link to="/contact" className="card__link">
            <p>LEGG TIL I ØNSKELISTE</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w- card__icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

FeaturedProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FeaturedProductItem;
