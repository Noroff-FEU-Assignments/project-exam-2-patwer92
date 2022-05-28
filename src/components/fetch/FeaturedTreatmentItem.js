import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FeaturedTreatmentItem({ id, title, image, price }) {
  return (
    <figure className="card__image-block">
      <h2 className="card__title">{title}</h2>
      <img className="card__image" src={image} alt="" />
      <figcaption className="card__caption">
        <h3 className="card__caption-title">Kr {price},-</h3>
        <div className="card__link-wrapper">
          <Link to={`treatment/details/${id}`} className="card__button btn btn--secondary">
            LES MER
          </Link>
          <Link to="/wishlist" className="card__link">
            <p>LEGG TIL I ØNSKELISTE</p>
            <FontAwesomeIcon icon={faHeart} className="card__icon" />
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

FeaturedTreatmentItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FeaturedTreatmentItem;
