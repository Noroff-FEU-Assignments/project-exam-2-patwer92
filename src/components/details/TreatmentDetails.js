import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import TreatmentDetailsItem from "./TreatmentDetailsItem";
import Footer from "../layout/Footer";
import Loading from "../common/Loading";

function TreatmentDetails() {
  const [treatments, setTreatments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = BASE_URL + "treatments/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setTreatments(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="api__error">
        <div>ERROR: An error occured</div>;
      </div>
    );
  }
  const { title, price, description, image } = treatments;

  return (
    <>
      <TreatmentDetailsItem title={title} price={price} text={description} image={image.url} />
      <Footer />
    </>
  );
}

export default TreatmentDetails;
