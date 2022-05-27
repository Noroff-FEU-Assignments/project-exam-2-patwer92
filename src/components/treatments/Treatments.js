import { Container } from "react-bootstrap";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";
import Hero from "../layout/Hero";
import Infobox from "../layout/Infobox";
import TreatmentsList from "../fetch/TreatmentList";

function Treatments() {
  return (
    <>
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
        />
      </Container>

      <Footer />
    </>
  );
}

export default Treatments;
