import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";
import Footer from "../../components/layout/Footer";
import Heading from "../../components/layout/Heading";

function FAQ() {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Spørsmål og svar</title>
        <meta
          name="description"
          content="På denne siden finner du vanlige spørsmål og svar til våre behandlinger og produkter."
        ></meta>
      </Helmet>
      <ScrollToTopBtn />
      <Container fluid>
        <main className="faq">
          <h2 className="faq__title">Spørsmål og svar</h2>
          <Heading title="Her finner du vanlige spørsmål og svar til våre behandlinger og produkter." />
          <h3 className="main__heading">Spørsmål tittel 1</h3>
          <p className="main__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat, et quod
            fugiat nesciunt vero a deserunt tempore, vitae unde dolore illo eos repellendus dolor
            expedita quis maiores ipsam necessitatibus.
          </p>
          <h3 className="main__heading">Spørsmål tittel 2</h3>
          <p className="main__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat, et quod
            fugiat nesciunt vero a deserunt tempore, vitae unde dolore illo eos repellendus dolor
            expedita quis maiores ipsam necessitatibus.
          </p>
          <h3 className="main__heading">Spørsmål tittel 3</h3>
          <p className="main__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat, et quod
            fugiat nesciunt vero a deserunt tempore, vitae unde dolore illo eos repellendus dolor
            expedita quis maiores ipsam necessitatibus.
          </p>
          <h3 className="main__heading">Spørsmål tittel 4</h3>
          <p className="main__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat, et quod
            fugiat nesciunt vero a deserunt tempore, vitae unde dolore illo eos repellendus dolor
            expedita quis maiores ipsam necessitatibus.
          </p>
          <h3 className="main__heading">Spørsmål tittel 5</h3>
          <p className="main__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat, et quod
            fugiat nesciunt vero a deserunt tempore, vitae unde dolore illo eos repellendus dolor
            expedita quis maiores ipsam necessitatibus.
          </p>
          <h3 className="main__heading">Spørsmål tittel 6</h3>
          <p className="main__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat, et quod
            fugiat nesciunt vero a deserunt tempore, vitae unde dolore illo eos repellendus dolor
            expedita quis maiores ipsam necessitatibus.
          </p>
          <h3 className="main__heading">Spørsmål tittel 7</h3>
          <p className="main__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat, et quod
            fugiat nesciunt vero a deserunt tempore, vitae unde dolore illo eos repellendus dolor
            expedita quis maiores ipsam necessitatibus.
          </p>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default FAQ;
