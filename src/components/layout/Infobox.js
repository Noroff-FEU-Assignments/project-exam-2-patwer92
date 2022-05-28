import PropTypes from "prop-types";

function Infobox({
  infoClass,
  infoIcon1,
  infoIcon2,
  infoIcon3,
  infoText1,
  infoText2,
  infoText3,
  altText1,
  altText2,
  altText3,
}) {
  return (
    <>
      <div className={infoClass}>
        <div className="infobox__block">
          <img src={infoIcon1} alt={altText1} className="infobox__icon" />
          <p className="infobox__text">{infoText1}</p>
        </div>
        <div className="infobox__block">
          <img src={infoIcon2} alt={altText2} className="infobox__icon" />
          <p className="infobox__text">{infoText2}</p>
        </div>
        <div className="infobox__block">
          <img src={infoIcon3} alt={altText3} className="infobox__icon" />
          <p className="infobox__text">{infoText3}</p>
        </div>
      </div>
    </>
  );
}

Infobox.propTypes = {
  infoClass: PropTypes.string.isRequired,
  infoIcon1: PropTypes.string.isRequired,
  infoIcon2: PropTypes.string.isRequired,
  infoIcon3: PropTypes.string.isRequired,
  infoText1: PropTypes.string.isRequired,
  infoText2: PropTypes.string.isRequired,
  infoText3: PropTypes.string.isRequired,
  altText1: PropTypes.string.isRequired,
  altText2: PropTypes.string.isRequired,
  altText3: PropTypes.string.isRequired,
};

export default Infobox;
