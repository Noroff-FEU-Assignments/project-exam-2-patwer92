import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Nav, Offcanvas } from "react-bootstrap";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import AuthContext from "../../context/AuthContext";

export default function OffcanvasNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <>
      <button className="header__button" onClick={handleShow}>
        <MenuAlt3Icon className="header__menu" />
      </button>

      <Offcanvas className="nav" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
            <h2 className="nav__heading">BUTIKK</h2>
            <Link to="/treatments" className="nav__link">
              Behandlinger
            </Link>
            <Link to="/products" className="nav__link">
              Produkter
            </Link>
            <h2 className="nav__heading">GENERELT</h2>
            <Link to="/about" className="nav__link">
              Om oss
            </Link>
            <Link to="/contact" className="nav__link">
              Kontakt oss
            </Link>
            {auth ? (
              <Link to="/dashboard" className="nav__link">
                Kontrollpanel
              </Link>
            ) : (
              ""
            )}
            {auth ? (
              <Link to="/" className="nav__link">
                <button onClick={logout}>Logg ut</button>
              </Link>
            ) : (
              <Link to="/login" className="nav__link">
                Logg inn
              </Link>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
