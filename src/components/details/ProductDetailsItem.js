import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Container, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Heading from "../layout/Heading";

function ProductDetailsItem({ title, price, text, img1, img2, img3, img4 }) {
  const [modalShow, setModalShow] = React.useState(false);

  function VerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Handlekurv kommer snart</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
                  <Link to="/products">Produkter</Link>
                  <span>/</span>
                </li>
                <li className="details__breadcrumb-item--active">{title}</li>
              </Breadcrumb>
            </div>
            <div className="details__image-wrapper">
              <img src={img1} alt="" className="details__main-image" />

              <div className="details__image-block">
                <img src={img2} alt="" className="details__image" />
                <img src={img3} alt="" className="details__image" />
                <img src={img4} alt="" className="details__image" />
              </div>
            </div>
            <div className="details__content">
              <Heading title={title} className="details__title" />
              <p className="details__price">kr {price},-</p>
              <p className="details__text">{text}</p>
              <div className="details__link-wrapper">
                <button className="details__button btn" onClick={() => setModalShow(true)}>
                  LEGG I HANDLEKURV
                </button>
                <Link to="/wishlist" className="details__link">
                  <p>LEGG TIL I ØNSKELISTE</p>
                  <FontAwesomeIcon icon={faHeart} className="details__icon" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

ProductDetailsItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  img4: PropTypes.string.isRequired,
};

export default ProductDetailsItem;
