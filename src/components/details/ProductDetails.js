import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/api";
import ProductDetailsItem from "./ProductDetailsItem";
import Footer from "../layout/Footer";

function ProductDetails() {
  const [products, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = BASE_URL + "products/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setProduct(json);
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
    return (
      <div className="api__loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api__error">
        <div>ERROR: An error occured</div>;
      </div>
    );
  }
  const { title, price, description, mainImage, secondImage, thirdImage, fourthImage } = products;

  return (
    <>
      <ProductDetailsItem
        title={title}
        price={price}
        text={description}
        img1={mainImage.url}
        img2={secondImage.url}
        img3={thirdImage.url}
        img4={fourthImage.url}
      />
      <Footer />
    </>
  );
}

export default ProductDetails;
