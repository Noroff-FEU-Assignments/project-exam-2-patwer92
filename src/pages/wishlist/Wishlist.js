import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import Heading from "../../components/layout/Heading";
import Footer from "../../components/layout/Footer";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";

function Wishlist() {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Ønskeliste</title>
      </Helmet>
      <ScrollToTopBtn />
      <Container fluid>
        <main className="wishlist">
          <h2 className="wishlist__title">Ønskeliste</h2>
          <FontAwesomeIcon icon={faHeart} className="wishlist__icon" />
          <Heading title="Ønskelisten er tom" />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Wishlist;
