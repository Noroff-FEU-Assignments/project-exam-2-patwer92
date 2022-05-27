import PropTypes from "prop-types";

function Hero({ title, subtext, image, alt }) {
  return (
    <div className="hero">
      <h2 className="hero__title">{title}</h2>
      <p className="hero__subtext">{subtext}</p>
      <img src={image} alt={alt} className="hero__image" />
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hero;
