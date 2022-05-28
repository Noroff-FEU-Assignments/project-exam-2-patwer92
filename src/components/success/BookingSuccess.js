import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../layout/Footer";

function BookingSuccess() {
  return (
    <>
      <main class="success">
        <h2 className="success__title">Booking gjennomført</h2>
        <FontAwesomeIcon icon={faCircleCheck} className="success__icon" />
        <Heading title="Håper du blir fornøyd med din booking!" />
        <p className="success__text">
          Hvis du har flere spørsmål angående din bestilling, så send oss gjerne en melding på{" "}
          <Link to="/contact" className="success__link">
            denne siden
          </Link>{" "}
          så tar vi kontakt så fort vi kan.
        </p>

        <Link to="/treatments" className="btn btn--secondary success__button">
          TILBAKE TIL BEHANDLINGER
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default BookingSuccess;
