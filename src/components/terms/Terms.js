import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";

function Terms() {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Kjøpsvilkår</title>
        <meta
          name="description"
          content="På denne siden finner du våre vilkår og salgsbetingelser som er utarbeidet av Forbrukertilsynet."
        ></meta>
      </Helmet>
      <ScrollToTopBtn />
      <Container fluid>
        <main className="terms">
          <h2 className="terms__title">Kjøpsvilkår</h2>
          <Heading title="Nedenfor finner du våre vilkår og salgsbetingelser som er utarbeidet av Forbrukertilsynet." />
          <h3 className="main__heading">Vilkår tittel 1</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at iste ullam,
            explicabo maiores dolorum neque excepturi ducimus nostrum ratione? Quas doloribus
            excepturi voluptates atque minima aliquam nemo error iusto.
          </p>
          <h3 className="main__heading">Vilkår tittel 2</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at iste ullam,
            explicabo maiores dolorum neque excepturi ducimus nostrum ratione? Quas doloribus
            excepturi voluptates atque minima aliquam nemo error iusto.
          </p>
          <h3 className="main__heading">Vilkår tittel 3</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at iste ullam,
            explicabo maiores dolorum neque excepturi ducimus nostrum ratione? Quas doloribus
            excepturi voluptates atque minima aliquam nemo error iusto.
          </p>
          <h3 className="main__heading">Vilkår tittel 4</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at iste ullam,
            explicabo maiores dolorum neque excepturi ducimus nostrum ratione? Quas doloribus
            excepturi voluptates atque minima aliquam nemo error iusto.
          </p>
          <h3 className="main__heading">Vilkår tittel 5</h3>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at iste ullam,
            explicabo maiores dolorum neque excepturi ducimus nostrum ratione? Quas doloribus
            excepturi voluptates atque minima aliquam nemo error iusto.
          </p>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Terms;
