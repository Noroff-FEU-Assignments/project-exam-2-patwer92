import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Footer from "../../components/layout/Footer";
import Heading from "../../components/layout/Heading";
import Hero from "../../components/layout/Hero";
import ProductsList from "../../components/fetch/ProductList";
import Infobox from "../../components/layout/Infobox";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";

function Products() {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Produkter</title>
        <meta
          name="description"
          content="Hjemmehudpleie leverer kun økologiske produkter som passer til alle hudtyper."
        ></meta>
      </Helmet>
      <ScrollToTopBtn />
      <Hero
        title="Sjekk ut våre nyeste ansiktsmasker"
        image="images/hero-products.jpg"
        subtext=""
        alt=""
      />
      <Container fluid>
        <Heading title="Oppstarts kampanje! Kjøp 3 produkter og få med gratis gua sha sett" />
        <p className="main__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, necessitatibus odit!
          Nostrum quaerat magnam voluptates? Eaque eveniet corrupti voluptatum natus ipsam illum
          quibusdam error excepturi temporibus. Animi ratione maxime corrupti.
        </p>
      </Container>
      <Container fluid className="card">
        <section className="card__wrapper">
          <div className="card__heading-block">
            <h2 className="card__heading">Alle produkter</h2>
          </div>
          <ProductsList />
        </section>
      </Container>

      <Container fluid>
        <Infobox
          infoClass="infobox infobox--products"
          infoIcon1="images/circle-check-solid.svg"
          infoText1="Alle våre produkter er dermatologisk testet av hudspesialister."
          infoIcon2="images/ranking-star-solid.svg"
          infoText2="Våre merker leverer kun de beste kvalitetsvarene som markedet har å by på."
          infoIcon3="images/money-check-solid.svg"
          infoText3="90 dagers åpent kjøp."
          altText1="Sirkel hake ikon"
          altText2="Diagram med stjerne ikon"
          altText3="Bankkort ikon"
        />
      </Container>

      <Footer />
    </>
  );
}

export default Products;
