import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";

function Contact() {
  return (
    <>
      <Container fluid>
        <section className="contact">
          <h2 className="contact__title">Kontakt oss</h2>
          <div className="contact__content">
            <div className="contact__text-container">
              <Heading title="Vi svarer på alle hendvendelser!" />

              <div className="contact__text">
                <p>
                  Send oss en epost på kontakt@hjemmehudpleie.no eller benytt kontaktskjemaet på
                  denne siden.
                </p>
                <p>
                  Vi har også en liste med vanlige spørsmål og svar som du{" "}
                  <Link to="/" className="contact__link">
                    finner her.
                  </Link>
                </p>
              </div>
            </div>
            <div className="contact__form-container">
              <ContactForm />
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
