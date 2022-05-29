import { Container } from "react-bootstrap";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";

function Shipping() {
  return (
    <>
      <ScrollToTopBtn />
      <Container fluid>
        <main className="shipping">
          <h2 className="shipping__title">Frakt og retur</h2>
          <Heading title="Vår leveringstid er normalt 2-4 virkedager. Leveringstiden regnes fra dagen etter at du la inn bestillingen, forutsatt at vi har varen på lager." />
          <h3 className="main__heading">Tittel 1</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur expedita
            exercitationem vitae, delectus culpa corrupti iure inventore, earum illum nobis deleniti
            ratione debitis pariatur a et totam harum nisi.
          </p>
          <h3 className="main__heading">Tittel 2</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur expedita
            exercitationem vitae, delectus culpa corrupti iure inventore, earum illum nobis deleniti
            ratione debitis pariatur a et totam harum nisi.
          </p>
          <h3 className="main__heading">Tittel 3</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur expedita
            exercitationem vitae, delectus culpa corrupti iure inventore, earum illum nobis deleniti
            ratione debitis pariatur a et totam harum nisi.
          </p>
          <h3 className="main__heading">Tittel 4</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur expedita
            exercitationem vitae, delectus culpa corrupti iure inventore, earum illum nobis deleniti
            ratione debitis pariatur a et totam harum nisi.
          </p>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Shipping;
