import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button, FloatingLabel, Container, Row, Col } from "react-bootstrap";
import FormError from "../common/FormError";
import FormData from "form-data";
import { BASE_URL } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  title: yup.string().required("Skriv inn en tittel"),
  price: yup.number().required().typeError("Skriv inn en pris"),
  description: yup.string().required("Skriv inn en beskrivelse"),
});

export default function CreateTreatment() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [status, setStatus] = useState(undefined);

  const [auth] = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    const token = auth.jwt;

    const url = `${BASE_URL}treatments`;

    const formData = new FormData();
    formData.append("files.image", data.files.image[0]);
    formData.append("data", JSON.stringify(data));

    const options = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, options);
      await response.json();

      setStatus({ type: "success" });
    } catch (error) {
      setStatus({ type: "error", error });
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Container fluid>
        <Form className="admin__form" onSubmit={handleSubmit(onSubmit)}>
          {serverError && <FormError>{serverError}</FormError>}
          <fieldset disabled={submitting}>
            <h4 className="admin__form-heading my-3">Legg til behandling</h4>
            <Row className="g-2">
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Tittel"
                  className="admin__form-input mb-2"
                >
                  <Form.Control {...register("title")} type="text" placeholder="Tittel" />
                  {errors.title && <FormError>{errors.title.message}</FormError>}
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Pris"
                  className="admin__form-input mb-2"
                >
                  <Form.Control {...register("price")} type="text" placeholder="Pris" />
                  {errors.price && <FormError>{errors.price.message}</FormError>}
                </FloatingLabel>
              </Col>
            </Row>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Beskrivelse"
              className="admin__form-input mb-2"
            >
              <Form.Control
                {...register("description")}
                as="textarea"
                type="text"
                placeholder="Beskrivelse"
                style={{ height: "100px" }}
              />
              {errors.description && <FormError>{errors.description.message}</FormError>}
            </FloatingLabel>

            <Form.Group controlId="formFile" className="my-4">
              <Form.Label className="admin__form-label">Last opp bilde</Form.Label>
              <Form.Control
                {...register("files.image")}
                type="file"
                name="files.image"
                required
                className="admin__form-input admin__upload"
              />
              {errors.image && <FormError>{errors.image.message}</FormError>}
            </Form.Group>
            <div className="admin__form-footer">
              <Button className="btn btn--secondary admin__form-btn my-5" type="submit">
                {submitting ? "LASTER OPP..." : "LAST OPP"}
              </Button>
              {status?.type === "success" && (
                <div className="admin__success">
                  <p className="admin__success-msg">Behandling er lastet opp</p>
                </div>
              )}
              {status?.type === "error" && (
                <div className="admin__error">
                  <p className="admin__error-msg">Behandling ble ikke lastet opp</p>
                </div>
              )}
            </div>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}
