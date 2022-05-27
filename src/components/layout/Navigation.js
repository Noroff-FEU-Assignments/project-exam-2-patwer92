import { useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../../utils/ScrollToTop";
import AuthContext from "../../context/AuthContext";
import Cart from "./Cart";
import Home from "../home/Home";
import Treatments from "../treatments/Treatments";
import TreatmentDetails from "../details/TreatmentDetails";
import Products from "../products/Products";
import ProductDetails from "../details/ProductDetails";
import About from "../about/About";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import BookingSuccess from "../success/BookingSuccess";
import Dashboard from "../dashboard/Dashboard";
import OffcanvasNav from "./OffcanvasNav";
import Search from "./Search";

function Navigation() {
  const [auth] = useContext(AuthContext);

  return (
    <ScrollToTop>
      <Navbar className="header__navbar" sticky="top" expand={false}>
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img
                className="header__logo"
                src="images/logo-primary.jpg"
                alt="Hjemmehudpleie logo"
              />
            </Navbar.Brand>
          </Link>

          <div className="header__container ms-auto">
            <div className="header__login">
              {auth ? (
                <span>
                  <FontAwesomeIcon icon={faCircle} className="header__login-icon" />
                  Admin pålogget
                </span>
              ) : (
                ""
              )}
            </div>
            <Search />
            <Cart />
            <Link to="/contact">
              <FontAwesomeIcon icon={faHeart} className="header__icon" />
            </Link>
            <Link to="/login">
              <FontAwesomeIcon icon={faUserLarge} className="header__icon" />
            </Link>
          </div>

          <Navbar.Toggle className="header__navbar-toggler" aria-controls="offcanvasNavbar">
            <OffcanvasNav />
          </Navbar.Toggle>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/treatments" component={Treatments} />
        <Route path="/treatment/details/:id" component={TreatmentDetails} />
        <Route path="/products" component={Products} />
        <Route path="/product/details/:id" component={ProductDetails} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/booking-success" component={BookingSuccess} />
      </Switch>
    </ScrollToTop>
  );
}

export default Navigation;
