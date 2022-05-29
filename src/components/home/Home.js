import { Container } from "react-bootstrap";
import Carousel from "../layout/Carousel";
import Heading from "../layout/Heading";
import FeaturedTreatments from "../fetch/FeaturedTreatmentList";
import FeaturedProducts from "../fetch/FeaturedProductList";
import Footer from "../layout/Footer";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";

function Home() {
  return (
    <>
      <ScrollToTopBtn />
      <Carousel className="carousel" />
      <Container fluid>
        <Heading title="Vi tar med oss hudklinikken hjem til deg - helt enkelt!" />
        <p className="main__text">
          Hjemmehudpleie er et unikt tilbud til deg som ønsker behandling hjemme uten å dra til en
          hudpleiesalong.
        </p>
        <p className="main__text pt-0">
          Vi vet at tiden ikke alltid strekker til eller har av ulike grunner ikke mulighet til å
          oppsøke en hudpleier.
        </p>
        <p className="main__text pt-0" id="main__first-carousel">
          Vi hjelper deg med dine hudpleierutiner eller hvordan du skal velge riktig produkter, så
          du enkelt kan oppnå en frisk og sunn hud.
        </p>
      </Container>
      <Container fluid className="card">
        <section className="card__wrapper">
          <div className="card__heading-block">
            <h2 className="card__heading">Populære behandlinger</h2>
          </div>
          <FeaturedTreatments />
        </section>
      </Container>

      <Container fluid>
        <h2 className="main__heading">Ta en titt på vårt utvalg av produkter</h2>
        <p className="main__text" id="main__second-carousel">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium culpa ipsa
          veritatis magni voluptate voluptatibus similique odio dignissimos in earum saepe.
        </p>
      </Container>
      <Container fluid className="card">
        <section className="card__wrapper">
          <div className="card__heading-block">
            <h2 className="card__heading">Anbefalte produkter</h2>
          </div>
          <FeaturedProducts />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
