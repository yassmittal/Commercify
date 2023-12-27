// import { useState } from "react";
import { useEffect, useState } from "react";
import { HeartFilledIcon, HeartOutlinedIcon } from "../DynamicIcons";
import { useNavigate } from "react-router-dom";

export default function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [trendingProducts, setTrendingProducts] = useState([
    {
      name: "Readme 12 pro",
      img: "Images/realme-c12-image.jpeg",
      price: 11999,
      isFavoirate: true,
      id: 1,
    },
    {
      name: "product 2",
      img: "Images/realme-c12-image.jpeg",
      price: 11999,
      isFavoirate: false,
      id: 2,
    },
    {
      name: "product 3",
      img: "Images/realme-c12-image.jpeg",
      price: 11999,
      isFavoirate: false,
      id: 3,
    },
    {
      name: "product 4",
      img: "Images/realme-c12-image.jpeg",
      price: 11999,
      isFavoirate: false,
      id: 4,
    },
  ]);

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

  function toggleFavoirate(id) {
    const updatedTrendingProducts = [...trendingProducts];
    const selectedProduct = updatedTrendingProducts.find((product) => {
      return product.id === id;
    });

    selectedProduct.isFavoirate = selectedProduct.isFavoirate ? false : true;
    setTrendingProducts(updatedTrendingProducts);
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl text-center font-semibold my-6">
        Trending Products
      </h2>
      <div className="grid grid-cols-4 gap-12">
        {loading ? (
          // Render skeleton loading placeholders while data is being fetched
          <div>Loading</div>
        ) : (
          // Render the actual product list once data is fetched
          <>
            {products.map((product) => {
              return (
                <SingleProduct
                  name={product.title}
                  img={product.image}
                  price={product.price}
                  isFavoirate={product.isFavoirate}
                  key={product.id}
                  iconClick={() => toggleFavoirate(product.id)}
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

// eslint-disable-next-line react/prop-types
function SingleProduct({ name, img, price, isFavoirate, iconClick, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all"
      onClick={() => {
        navigate(`/ProductDetails/${id}`);
      }}
    >
      <div className="bg-violet-200 rounded-t-md relative p-3 h-52">
        <img src={img} alt="" className="w-40 mx-auto h-full object-cover" />
        <button
          className="text-[#712689] absolute top-3 right-3"
          onClick={(e) => {
            e.stopPropagation();
            iconClick();
          }}
        >
          {isFavoirate ? <HeartFilledIcon /> : <HeartOutlinedIcon />}
        </button>
      </div>
      <div className="bg-white px-3 py-2 flex justify-between items-center rounded-b-md">
        <p className="font-semibold text-lg twoLinesOnly me-2">{name}</p>
        <p className="text-[#712689] font-semibold text-xl whitespace-nowrap">
          Rs {price}
        </p>
      </div>
    </div>
  );
}
