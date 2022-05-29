import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container, Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Heading from "../layout/Heading";
import CreateBooking from "../create/CreateBooking";

function TreatmentDetailsItem({ title, price, text, image }) {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | {title}</title>
      </Helmet>
      <Container fluid>
        <section className="details">
          <div className="details__container">
            <div className="details__breadcrumb">
              <Breadcrumb>
                <li className="details__breadcrumb-item">
                  <Link to="/">Hjem</Link>
                  <span>/</span>
                </li>
                <li className="details__breadcrumb-item">
                  <Link to="/treatments">Behandlinger</Link>
                  <span>/</span>
                </li>
                <li className="details__breadcrumb-item--active">{title}</li>
              </Breadcrumb>
            </div>
            <div className="details__image-wrapper">
              <img src={image} alt="" className="details__main-image" />
            </div>
            <div className="details__content">
              <Heading title={title} className="details__title" />
              <p className="details__price">Kr {price},-</p>
              <p className="details__text">{text}</p>
              <div className="details__link-wrapper">
                <CreateBooking title={title} />
                <Link to="/wishlist" className="details__link">
                  <p>LEGG TIL I ØNSKELISTE</p>
                  <FontAwesomeIcon icon={faHeart} className="details__icon" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

TreatmentDetailsItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TreatmentDetailsItem;
