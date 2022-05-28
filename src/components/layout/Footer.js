import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="newsletter">
        <Container fluid className="newsletter__wrapper">
          <h2 className="newsletter__headline">Abonner på vårt nyhetsbrev</h2>
          <p className="newsletter__subheading">
            Gå ikke glipp av spennende nyheter og rabattkoder!
          </p>
          <form className="newsletter__form">
            <Form.Floating className="mb-3">
              <Form.Control id="floatingInputCustom" type="email" placeholder="name@example.com" />
              <label htmlFor="floatingInputCustom">Skriv inn din e-postadresse</label>
            </Form.Floating>

            <button className="btn btn--secondary newsletter__button" type="submit">
              MELD MEG PÅ
            </button>
          </form>
          <div className="newsletter__disclaimer">
            <p className="newsletter__disclaimer-text">
              Ved å registrere deg via e-post, samtykker du i å motta markedsføringskommunikasjon
              fra Hjemmehudpleie. Se personvernregler og vilkår for mer informasjon.
            </p>
          </div>
        </Container>
      </section>
      <footer>
        <p className="footer__copyright">© 2022, Hjemmehudpleie AS. Alle rettigheter forbeholdt.</p>
        <Container fluid className="footer">
          <div className="footer__item">
            <h2 className="footer__title">BUTIKK</h2>
            <Link to="/treatments" className="footer__link">
              Behandlinger
            </Link>
            <Link to="/products" className="footer__link">
              Produkter
            </Link>
          </div>
          <div className="footer__item">
            <h2 className="footer__title">GENERELT</h2>
            <Link to="/about" className="footer__link">
              Om oss
            </Link>
            <Link to="/contact" className="footer__link">
              Kontakt oss
            </Link>
            <Link to="/login" className="footer__link">
              Logg inn
            </Link>
          </div>
          <div className="footer__item">
            <h2 className="footer__title">HJELP</h2>
            <Link to="/contact" className="footer__link">
              FAQ
            </Link>
            <Link to="/contact" className="footer__link">
              Personvern
            </Link>
            <Link to="/contact" className="footer__link">
              Kjøpsvilkår
            </Link>
            <Link to="/contact" className="footer__link">
              Frakt og retur
            </Link>
          </div>
          <div className="footer__item">
            <h2 className="footer__title">FØLG OSS</h2>
            <div className="footer__icon-wrapper">
              <a href="https://www.instagram.com/" className="footer__instagram-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="footer__icon"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/" className="footer__facebook-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="footer__icon"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
