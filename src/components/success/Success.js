import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../layout/Footer";
import { Container } from "react-bootstrap";

function Success() {
  return (
    <>
      <Container fluid>
        <main className="success">
          <h2 className="success__title">Booking gjennomført</h2>
          <FontAwesomeIcon icon={faCircleCheck} className="success__icon" />
          <Heading title="Håper du blir fornøyd med din booking!" />
          <p className="success__text">
            Vi tar kontakt snarest. Hvis du lurer på noe mer angående din bestilling, så kan du
            sende oss en melding på{" "}
            <Link to="/contact" className="success__link">
              denne siden.
            </Link>
          </p>

          <Link to="/treatments" className="btn btn--secondary success__button">
            TILBAKE TIL BEHANDLINGER
          </Link>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Success;
