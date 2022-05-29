import { Container } from "react-bootstrap";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";
import Hero from "../layout/Hero";

function About() {
  return (
    <>
      <ScrollToTopBtn />
      <Hero
        title="Om oss"
        subtext="Hei, så hyggelig du tok deg tid til å besøke siden vår!"
        image="images/hero-about.jpg"
        alt=""
      />
      <Container fluid>
        <main className="about">
          <Heading title="Hvem vi er" />
          <p className="main__text mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, necessitatibus odit!
            Nostrum quaerat magnam voluptates? Eaque eveniet corrupti voluptatum natus ipsam illum
            quibusdam error excepturi temporibus. Animi ratione maxime corrupti.
          </p>

          <div className="about__values-block">
            <img src="images/values-img.jpg" alt="" className="about__image" />
            <div className="about__content">
              <h2 className="about__title">Våre verdier</h2>
              <p className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, necessitatibus
                debitis nostrum earum tempore labore dolorem nesciunt magni excepturi voluptates
                exercitationem, vel praesentium explicabo adipisci, eum id a consequuntur deserunt.
                Excepturi officiis, laboriosam quisquam sequi quo aliquam similique sed maxime. Odit
                fugit maxime in velit ducimus delectus omnis deserunt aliquam voluptatem reiciendis.
              </p>
            </div>
          </div>
          <div className="about__team-block">
            <img src="images/team-img.jpg" alt="" className="about__image d-lg-none" />
            <div className="about__content">
              <h2 className="about__title">Litt om vårt team</h2>
              <p className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officiis,
                laboriosam quisquam sequi quo aliquam similique sed maxime. Odit fugit maxime in
                velit ducimus delectus omnis deserunt aliquam voluptatem reiciendis. Iusto,
                necessitatibus debitis nostrum earum tempore labore dolorem nesciunt magni excepturi
                voluptates exercitationem, vel praesentium explicabo adipisci, eum id a consequuntur
                deserunt.
              </p>
            </div>
            <img src="images/team-img.jpg" alt="" className="about__image d-none d-lg-block" />
          </div>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default About;
