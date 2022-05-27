import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/api";
import ProductItem from "./ProductItem";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + "products/");

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setProducts(json);
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

  return (
    <>
      {products.map(function (product) {
        const { id, title, price, mainImage } = product;
        return <ProductItem id={id} key={id} title={title} image={mainImage.url} price={price} />;
      })}
    </>
  );
}
