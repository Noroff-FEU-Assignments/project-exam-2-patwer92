import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import FormError from "../common/FormError";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Skriv inn ett brukernavn."),
  password: yup.string().required("Skriv inn ett passord."),
});

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    const dataInput = JSON.stringify({
      identifier: data.username,
      password: data.password,
    });

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(url, dataInput, options);
      console.log("response", response.data);
      setAuth(response.data);
      history.push("/dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset className="login__fieldset" disabled={submitting}>
          <FloatingLabel controlId="floatingInput" label="Brukernavn" className="mb-3 login__input">
            <Form.Control {...register("username")} type="text" placeholder="Brukernavn" />
            {errors.username && <FormError>{errors.username.message}</FormError>}
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Passord" className="mb-3 login__input">
            <Form.Control {...register("password")} type="password" placeholder="Passord" />
            {errors.password && <FormError>{errors.password.message}</FormError>}
          </FloatingLabel>
          <Button className="btn btn--secondary login__button mt-3" type="submit">
            {submitting ? "Logging in..." : "Login"}
          </Button>
        </fieldset>
      </form>
    </>
  );
}

export default LoginForm;
