import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TreatmentItem({ id, title, text, image, price }) {
  return (
    <div className="treatments__block">
      <img src={image} alt="" className="treatments__image" />
      <div className="treatments__content">
        <h3 className="treatments__subheading">{title}</h3>
        <p className="treatments__price">Kr {price},-</p>
        <p className="treatments__text">{text}</p>
        <Link to={`treatment/details/${id}`} className="treatments__button btn btn--secondary">
          LES MER
        </Link>
      </div>
    </div>
  );
}

TreatmentItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TreatmentItem;
