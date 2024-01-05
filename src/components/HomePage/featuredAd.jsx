import { useEffect, useState } from "react";
import FeatuedAdPlaceholder from "./Placeholders/featuedAdPlaceholder";
import { useNavigate } from "react-router";

export default function FeaturedAd() {
  const [featuredProduct, setFeaturedProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const [randonNum, setRandomNum] = useState(Math.trunc(Math.random() * 20));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${randonNum}`,
        );
        const data = await response.json();
        setFeaturedProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      {loading ? (
        <FeatuedAdPlaceholder />
      ) : (
        <div
          className="bg-[#712689] text-white p-5 grid grid-cols-2 gap-4 items-center cursor-pointer"
          onClick={() => {
            navigate(`/ProductDetail/${randonNum}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div>
            <h2 className="text-4xl mb-3 leading-tight twoLinesOnly">
              {featuredProduct.title}
            </h2>

            <p className="leading-tight twoLinesOnly">
              {featuredProduct.description}
            </p>
            <button className="mt-5 bg-white shadow-md px-4 py-2 text-black rounded-sm hover:shadow-none font-semibold">
              Buy Now
            </button>
          </div>

          <div className="h-60">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.title}
              className="w-80 max-w-full h-full object-cover object-top ms-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
