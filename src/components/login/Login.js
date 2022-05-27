import { Container } from "react-bootstrap";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";
import LoginForm from "../forms/LoginForm";

function Login() {
  return (
    <>
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
