import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button, Modal, FloatingLabel, Row, Col } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import nb from "date-fns/locale/nb";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import useAxios from "../../hooks/useAxios";
import FormError from "../common/FormError";

registerLocale("nb", nb);

const postCodeRegex = RegExp(/^\d{4}$/);

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Skriv inn ditt fulle navn")
    .min(4, "Navnet må bestå av minst 4 tegn"),
  email: yup
    .string()
    .required("Skriv inn din e-postadresse")
    .email("Skriv inn en gyldig e-postadresse"),
  address: yup
    .string()
    .required("Skriv inn din addresse")
    .min(3, "Adresse må bestå av minst 3 tegn"),
  place: yup.string().required("Skriv inn ditt bosted").min(2, "Sted må bestå av minst 2 tegn"),
  zip: yup
    .string()
    .required("Skriv inn postkode")
    .matches(postCodeRegex, "Skriv inn en gyldig postkode"),
  date: yup.string().required("Fyll inn dato og klokkeslett"),
  message: yup.string(),
});

export default function CreateBooking({ title }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const history = useHistory();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    try {
      await http.post("bookings", data);
      history.push("/booking-success");
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
      reset();
    }
  }

  return (
    <>
      <Button className="details__button btn" onClick={handleShow}>
        GÅ TIL BOOKING
      </Button>

      <Modal show={show} onHide={handleClose} className="booking">
        <Modal.Header closeButton>
          <Modal.Title className="booking__title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="booking__body">
          <Form className="booking__form" onSubmit={handleSubmit(onSubmit)}>
            {serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
              <div className="booking__calendar">
                <h4 className="booking__heading">Fyll inn ønsket tid</h4>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      autoFocus
                      className="booking__datepicker"
                      selected={field.value}
                      onChange={(e) => field.onChange(e)}
                      showTimeSelect
                      includeTimes={[
                        setHours(setMinutes(new Date(), 0), 9),
                        setHours(setMinutes(new Date(), 30), 10),
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 30), 13),
                        setHours(setMinutes(new Date(), 0), 15),
                        setHours(setMinutes(new Date(), 30), 16),
                        setHours(setMinutes(new Date(), 0), 18),
                      ]}
                      timeFormat="HH:mm"
                      timeIntervals={90}
                      timeCaption="tid"
                      dateFormat="dd-MM-yyyy HH:mm"
                      minDate={new Date()}
                      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                      placeholderText="Velg dato og klokkeslett"
                      locale="nb"
                    />
                  )}
                />
                {errors.date && <FormError>{errors.date.message}</FormError>}
              </div>
              <div className="booking__info">
                <h4 className="booking__heading mt-4">Skriv inn din informasjon</h4>
                <Form.Control
                  {...register("title")}
                  className="d-none"
                  name="title"
                  value={title}
                ></Form.Control>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Fullt navn"
                  className="booking__input mb-2"
                >
                  <Form.Control {...register("fullName")} type="text" placeholder="Fullt navn" />
                  {errors.fullName && <FormError>{errors.fullName.message}</FormError>}
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="E-postadresse"
                  className="booking__input mb-4"
                >
                  <Form.Control
                    {...register("email")}
                    type="email"
                    placeholder="eksempel@mail.no"
                  />
                  {errors.email && <FormError>{errors.email.message}</FormError>}
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Adresse"
                  className="booking__input mb-2"
                >
                  <Form.Control {...register("address")} type="text" placeholder="Adresse" />
                  {errors.address && <FormError>{errors.address.message}</FormError>}
                </FloatingLabel>
                <Row className="g-2">
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Postkode"
                      className="booking__input mb-4"
                    >
                      <Form.Control {...register("zip")} type="text" placeholder="Postkode" />
                      {errors.zip && <FormError>{errors.zip.message}</FormError>}
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Sted"
                      className="booking__input mb-2"
                    >
                      <Form.Control {...register("place")} type="text" placeholder="Sted" />
                      {errors.place && <FormError>{errors.place.message}</FormError>}
                    </FloatingLabel>
                  </Col>
                </Row>
                <h4 className="booking__heading">Skriv inn en melding (valgfritt)</h4>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Melding"
                  className="booking__input"
                >
                  <Form.Control
                    {...register("message")}
                    as="textarea"
                    placeholder="Skriv inn din melding"
                    style={{ height: "100px" }}
                  />
                  {errors.message && <FormError>{errors.message.message}</FormError>}
                </FloatingLabel>
              </div>
              <div className="booking__form-footer mt-4">
                <Button className="btn booking__button" type="submit">
                  {submitting ? "BOOKER TID..." : "BOOK TID"}
                </Button>
              </div>
            </fieldset>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
