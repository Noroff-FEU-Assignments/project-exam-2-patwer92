import { useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab, Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";
import CreateTreatment from "../../components/create/CreateTreatment";
import AdminBookingList from "../../components/fetch/AdminBookingList";
import AdminContactList from "../../components/fetch/AdminContactList";
import Footer from "../../components/layout/Footer";
import Heading from "../../components/layout/Heading";

function Dashboard() {
  const [key, setKey] = useState("0");
  return (
    <>
      <Helmet>
        <title>Hjemmehudpleie | Kontrollpanel</title>
      </Helmet>
      <ScrollToTopBtn />
      <Container fluid>
        <main className="admin">
          <h2 className="admin__title">Kontrollpanel</h2>
          <section className="admin__wrapper">
            <div className="admin__tabs d-none d-md-block">
              <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="0" title="Hovedmeny" className="">
                  <div className="admin__content ">
                    <Heading title="Logget inn som administrator" />
                    <CreateTreatment />
                  </div>
                </Tab>
                <Tab eventKey="1" title="Bookinger" className="">
                  <div className="admin__content ">
                    <AdminBookingList />
                  </div>
                </Tab>
                <Tab eventKey="2" title="Meldinger" className="">
                  <div className="admin__content">
                    <AdminContactList />
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className="admin__accordion d-md-none">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Hovedmeny</Accordion.Header>
                  <Accordion.Body>
                    <div className="admin__content">
                      <Heading title="Logget inn som administrator" />
                      <CreateTreatment />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Bookinger</Accordion.Header>
                  <Accordion.Body>
                    <div className="admin__content">
                      <AdminBookingList />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Meldinger</Accordion.Header>
                  <Accordion.Body>
                    <div className="admin__content">
                      <AdminContactList />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
}
export default Dashboard;
