import { useEffect, useState } from "react";
import TopCategoriesPlaceholder from "./Placeholders/topCategoriesPlaceholder";
import { useNavigate } from "react-router-dom";

export default function TopCategories() {
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setFavouriteProducts(data);
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
      <h2 className="text-4xl text-center font-semibold mb-5">
        Top Categories
      </h2>
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {loading ? (
            // Render skeleton loading placeholders while data is being fetched
            <TopCategoriesPlaceholder />
          ) : (
            // Render the actual product list once data is fetched
            <>
              {favouriteProducts.map((product , index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <CategoryCard
                    categoryCardTitle={product}
                    key={index}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CategoryCard({ categoryCardTitle }) {
  const navigate = useNavigate();
  return (
    <li
      className="border border-gray-300 rounded-lg py-5 px-4 text-center cursor-pointer hover:border-transparent hover:-translate-y-1 hover:shadow-md transition-all list-none"
      onClick={() => {
        navigate(`/${categoryCardTitle}`);
      }}
    >
      <p>{categoryCardTitle}</p>
    </li>
  );
}
