import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";
import Hero from "../layout/Hero";
import Infobox from "../layout/Infobox";
import TreatmentsList from "../fetch/TreatmentList";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";

function Treatments() {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Behandlinger</title>
        <meta
          name="description"
          content="Hjemmehudpleie leverer hudpleie-behandlinger rett hjem til deg, så du slipper å dra til en hudpleieklinikk."
        ></meta>
      </Helmet>
      <ScrollToTopBtn />
      <Hero
        title="Vi bringer hudklinikken hjem til deg"
        image="images/hero-treatments.jpg"
        subtext=""
        alt=""
      />
      <Container fluid>
        <Heading title="Bestill behandling hjemme - få med gratis veiledning over nett på kjøpet" />
        <p className="main__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, necessitatibus odit!
          Nostrum quaerat magnam voluptates? Eaque eveniet corrupti voluptatum natus ipsam illum
          quibusdam error excepturi temporibus. Animi ratione maxime corrupti.
        </p>
      </Container>
      <Container fluid>
        <section className="treatments">
          <div className="treatments__heading-block">
            <h2 className="treatments__heading">Våre behandlinger</h2>
          </div>
          <TreatmentsList />
        </section>
      </Container>

      <Container fluid>
        <Infobox
          infoClass="infobox infobox--treatments"
          infoIcon1="images/thumbs-up-solid.svg"
          infoText1="Alle våre hjemmebehandlere er sertifisert norske hudpleiere."
          infoIcon2="images/leaf-solid.svg"
          infoText2="Vi bruker kun økologiske produkter i våre behandlinger."
          infoIcon3="images/face-grin-beam-solid.svg"
          infoText3="100% Fornøydgaranti. Er du ikke fornøyd får du pengene tilbake."
          altText1="Tommel opp ikon"
          altText2="Blad ikon"
          altText3="Stort smil emoji-ikon"
        />
      </Container>

      <Footer />
    </>
  );
}

export default Treatments;
