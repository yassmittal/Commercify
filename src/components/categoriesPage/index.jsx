import { useEffect, useState } from "react";
import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";
import { useParams } from "react-router/dist";
import { SingleProduct } from "../SingleProduct";

// eslint-disable-next-line react/prop-types
export default function Categories({onClickFav}) {
  const { category } = useParams();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="p-5">
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
