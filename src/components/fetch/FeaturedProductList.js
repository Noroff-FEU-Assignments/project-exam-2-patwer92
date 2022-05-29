import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Loading from "../common/Loading";
import FeaturedProductItem from "./FeaturedProductItem";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + "products/");

        if (response.ok) {
          const json = await response.json();
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
    return <Loading />;
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
        const { id, title, price, mainImage, featured } = product;
        if (featured === true) {
          return (
            <FeaturedProductItem
              id={id}
              key={id}
              title={title}
              image={mainImage.url}
              price={price}
            />
          );
        }
      })}
    </>
  );
}
