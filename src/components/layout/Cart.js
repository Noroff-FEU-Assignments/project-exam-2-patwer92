import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  return (
    <>
      <button className="header__button" onClick={handleShowCart}>
        <FontAwesomeIcon icon={faShoppingBag} className="header__icon" />
      </button>

      <Offcanvas className="cart" show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="cart__body">
          <h2 className="cart__heading">Handlekurv</h2>
          <div className="cart__container">
            <FontAwesomeIcon icon={faShoppingBag} className="cart__icon" />
            <p className="cart__text">Handlekurven er tom</p>
          </div>
          <Link to="/products" className="btn cart__button" onClick={handleCloseCart}>
            GÅ TIL BUTIKK
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
