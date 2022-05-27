import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Breadcrumb } from "react-bootstrap";
import Heading from "../layout/Heading";
import CreateBooking from "../create/CreateBooking";

function TreatmentDetailsItem({ title, price, text, image }) {
  return (
    <>
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
                <Link to="/contact" className="details__link">
                  <p>LEGG TIL I ØNSKELISTE</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w- details__icon"
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
