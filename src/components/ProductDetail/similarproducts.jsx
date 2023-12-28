import { useEffect, useState } from "react";
import { SingleProduct } from "../HomePage/trendingProducts";
import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";

// eslint-disable-next-line react/prop-types
export default function Similarproducts({ category, currentProductId }) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, []);

  let similarProducts = allProducts.filter((product) => {
    return product.id != currentProductId;
  });

  console.log(similarProducts);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto" >
      {loading ? (
        <TrendingProductsPlaceholder />
      ) : (
        <>
          {similarProducts.map((product) => {
            return (
              <SingleProduct
                name={product.title}
                img={product.image}
                price={product.price}
                isFavoirate={product.isFavoirate}
                key={product.id}
                id={product.id}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
