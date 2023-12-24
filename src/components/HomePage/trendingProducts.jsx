// import { useState } from "react";
import { useState } from "react";
import { HeartFilledIcon, HeartOutlinedIcon } from "../DynamicIcons";

export default function TrendingProducts() {
  const [favoirates, setFavoirates] = useState({});

  const trendingProducts = [
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
  ];

  function toggleFavoirate(id) {
    product.isFavoirate ? setFavoirate(false) : setFavoirate(true);
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl text-center font-semibold my-6">
        Trending Products
      </h2>
      <div className="grid grid-cols-4 gap-12">
        {trendingProducts.map((product) => {
          return (
            <SingleProduct
              name={product.name}
              img={product.img}
              price={product.price}
              isFavoirate={product.isFavoirate}
              key={product.id}
              iconClick={() => toggleFavoirate(product.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function SingleProduct({ name, img, price, isFavoirate, iconClick }) {
  return (
    <div className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all">
      <div className="bg-violet-200 rounded-t-md relative p-3">
        <img src={img} alt="" className="w-40 mx-auto h-full object-cover" />
        <button
          className="text-[#712689] absolute top-3 right-3"
          onClick={iconClick}
        >
          {isFavoirate ? <HeartFilledIcon /> : <HeartOutlinedIcon />}
        </button>
      </div>
      <div className="bg-white px-3 py-2 flex justify-between items-center rounded-b-md">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-[#712689] font-semibold text-xl">Rs {price}</p>
      </div>
    </div>
  );
}
