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

    console.log(data);

    const token = auth.jwt;

    console.log(token);

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
      const json = await response.json();
      console.log(json);
    } catch (error) {
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

            <Button className="btn btn--secondary admin__form-btn my-5" type="submit">
              {submitting ? "LASTER OPP..." : "LAST OPP"}
            </Button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}

// const formData = new FormData();
// formData.append("image", data.image[0]);
// formData.append("title", JSON.stringify({ title: data.title }));
// formData.append("price", JSON.stringify({ price: data.price }));
// formData.append("description", JSON.stringify({ description: data.description }));

// {
//     headers: { "Content-type": "multipart/form-data" },
//   }

//   const response = await http.post("treatments", FormData, {
//     headers: { "Content-type": "multipart/form-data" },
//   });