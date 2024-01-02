/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import TrendingProductsPlaceholder from "./Placeholders/trendingProductsPlaceholder";
import { SingleProduct } from "../SingleProduct";

export default function TrendingProducts({onClickFav}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-4xl text-center font-semibold my-6">
        Trending Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {loading ? (
          <TrendingProductsPlaceholder />
        ) : (
          <>
            {products.map((product) => {
              return (
                <SingleProduct
                  name={product.title}
                  img={product.image}
                  price={product.price}
                  key={product.id}
                  id={product.id}
                  onClickFav={onClickFav}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}