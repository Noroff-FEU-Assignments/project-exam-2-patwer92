import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Form, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import FormError from "../common/FormError";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Skriv inn en gyldig epostadresse")
    .required("Skriv inn din epostadresse"),
});

function Footer() {
  const [status, setStatus] = useState(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    setStatus({ type: "success" });
  }

  return (
    <>
      <section className="newsletter">
        <Container fluid className="newsletter__wrapper">
          <h2 className="newsletter__headline">Abonner på vårt nyhetsbrev</h2>
          <p className="newsletter__subheading">
            Gå ikke glipp av spennende nyheter og rabattkoder!
          </p>
          <form className="newsletter__form" onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel
              controlId="floatingInput"
              label="Skriv inn din e-postadresse"
              className="mb-3"
            >
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="navn@eksempel.no"
                className="newsletter__input"
              />
              {errors.email && <FormError>{errors.email.message}</FormError>}
            </FloatingLabel>

            <button className="btn btn--secondary newsletter__button" type="submit">
              MELD MEG PÅ
            </button>
            {status?.type === "success" && (
              <div className="newsletter__success">
                <p className="newsletter__success-msg">Takk for at du meldte deg på!</p>
              </div>
            )}
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
            <Link to="/shipping" className="footer__link">
              Frakt og retur
            </Link>
            <Link to="/faq" className="footer__link">
              Spørsmål og svar
            </Link>
            <Link to="/privacy" className="footer__link">
              Personvern
            </Link>
            <Link to="/terms-and-conditions" className="footer__link">
              Kjøpsvilkår
            </Link>
          </div>
          <div className="footer__item">
            <h2 className="footer__title">FØLG OSS</h2>
            <div className="footer__icon-wrapper">
              <a href="https://www.instagram.com/" className="footer__instagram-icon">
                <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
              </a>
              <a href="https://www.facebook.com/" className="footer__facebook-icon">
                <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
