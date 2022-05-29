import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Footer from "../../components/layout/Footer";
import Heading from "../../components/layout/Heading";
import LoginForm from "../../components/forms/LoginForm";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";

function Login() {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Logg inn</title>
      </Helmet>
      <ScrollToTopBtn />
      <Container fluid>
        <section className="login">
          <h2 className="login__title">Logg inn</h2>
          <div className="login__form-container">
            <Heading title="Innlogging kun for administrator" />
            <p className="login__text">Pålogging for medlemmer kommer snart.</p>
            <LoginForm />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
