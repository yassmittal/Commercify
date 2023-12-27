import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../HomePage/trendingProducts";

export default function Categories() {
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

  console.log("products", products);

  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-12">
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            {products.map((product) => {
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
    </div>
  );
}
