import { Container } from "react-bootstrap";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";

function FAQ() {
  return (
    <>
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