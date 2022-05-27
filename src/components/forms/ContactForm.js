import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import FormError from "../common/FormError";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Skriv inn ditt fornavn")
    .min(2, "Fornavn må bestå av minst 2 tegn"),
  lastName: yup
    .string()
    .required("Skriv inn ditt etternavn")
    .min(2, "Etternavn må bestå av minst 2 tegn"),
  email: yup
    .string()
    .email("Skriv inn en gyldig epostadresse")
    .required("Skriv inn din epostadresse"),
  message: yup
    .string()
    .required("Skriv inn en melding")
    .min(10, "Meldingen må bestå av minst 10 tegn"),
});

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [status, setStatus] = useState("");

  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onSubmit(data, e) {
    setSubmitting(true);
    setServerError(null);
    console.log(data);

    e.preventDefault();

    const error = false;

    try {
      const response = await http.post("contacts", data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }

    if (error) {
      console.log("wtf error");
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  return (
    <>
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <FloatingLabel controlId="floatingInput" label="Fornavn" className="contact__input mb-3">
            <Form.Control {...register("firstName")} type="text" placeholder="Fornavn" />
            {errors.firstName && <FormError>{errors.firstName.message}</FormError>}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Etternavn"
            className="contact__input mb-3"
          >
            <Form.Control {...register("lastName")} type="text" placeholder="Etternavn" />
            {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="E-postadresse"
            className="contact__input mb-3"
          >
            <Form.Control {...register("email")} type="email" placeholder="navn@eksempel.no" />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea" label="Melding">
            <Form.Control
              {...register("message")}
              as="textarea"
              placeholder="Skriv inn din melding"
              style={{ height: "200px" }}
            />
            {errors.message && <FormError>{errors.message.message}</FormError>}
          </FloatingLabel>
          <Button className="contact__button btn btn--secondary mt-4" type="submit">
            {submitting ? "SENDER ..." : "SEND"}
          </Button>
          <div>
            {status === "success" ? (
              <div className="contact__success my-3">
                <p className="contact__success-msg">
                  Meldingen ble sendt! Takk for din forespørsel.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default ContactForm;
