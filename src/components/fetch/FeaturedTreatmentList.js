import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Loading from "../common/Loading";
import FeaturedTreatmentItem from "./FeaturedTreatmentItem";

export default function FeaturedTreatments() {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + "treatments/");

        if (response.ok) {
          const json = await response.json();
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
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="api__error">
        <div>ERROR: An error occured</div>
      </div>
    );
  }

  return (
    <>
      {treatments.map(function (treatment) {
        const { id, title, price, image, featured } = treatment;

        if (featured === true) {
          return (
            <FeaturedTreatmentItem id={id} key={id} title={title} image={image.url} price={price} />
          );
        }
      })}
    </>
  );
}
