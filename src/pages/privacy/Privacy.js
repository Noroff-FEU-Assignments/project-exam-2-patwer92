import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";
import Footer from "../../components/layout/Footer";
import Heading from "../../components/layout/Heading";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Personvern</title>
        <meta
          name="description"
          content="Informasjon om Hjemmehudpleies ivaretakelse av personopplysninger fra våre kunder og leverandører."
        ></meta>
      </Helmet>
      <ScrollToTopBtn />
      <Container fluid>
        <main className="privacy">
          <h2 className="privacy__title">Personvern</h2>
          <Heading title="Vi er opptatt av at personopplysninger om våre kunder og leverandører ivaretas på en god måte." />
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis
            reprehenderit voluptas repellat magni neque, tenetur minus soluta accusamus laborum hic
            praesentium iste nobis vero necessitatibus itaque exercitationem at maiores.
          </p>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis
            reprehenderit voluptas repellat magni neque, tenetur minus soluta accusamus laborum hic
            praesentium iste nobis vero necessitatibus itaque exercitationem at maiores.
          </p>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis
            reprehenderit voluptas repellat magni neque, tenetur minus soluta accusamus laborum hic
            praesentium iste nobis vero necessitatibus itaque exercitationem at maiores.
          </p>
          <p className="main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis
            reprehenderit voluptas repellat magni neque, tenetur minus soluta accusamus laborum hic
            praesentium iste nobis vero necessitatibus itaque exercitationem at maiores.
          </p>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Privacy;
