import { useEffect, useState } from "react";
import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";
import { SingleProduct } from "../SingleProduct";

// eslint-disable-next-line react/prop-types
export default function Similarproducts({
  category,
  currentProductId,
  onClickFav,
  isItemFav,
}) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`,
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto p-4">
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
                key={product.id}
                id={product.id}
                isItemFav={isItemFav}
                onClickFav={onClickFav}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
