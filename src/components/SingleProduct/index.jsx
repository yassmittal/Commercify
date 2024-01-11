/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { HeartFilledIcon, HeartOutlinedIcon } from "../DynamicIcons";
import { useEffect, useState } from "react";

export function SingleProduct({ name, img, price, id, onClickFav, isItemFav }) {
  const [isItemPresent, setIsItemPresent] = useState();
  const navigate = useNavigate();
  const favProducts = JSON.parse(localStorage.getItem("favProducts"));

  useEffect(() => {
    setIsItemPresent(isItemFav(id));
  }, [favProducts]);

  return (
    <div
      className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all"
      onClick={() => {
        navigate(`/ProductDetail/${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="bg-violet-200 rounded-t-md relative p-3 h-52">
        <img src={img} alt="" className="w-40 mx-auto h-full object-cover" />
        <button
          className="text-[#712689] absolute top-3 right-3"
          onClick={(e) => {
            e.stopPropagation();
            onClickFav(id);
          }}
        >
          {isItemPresent ? <HeartFilledIcon /> : <HeartOutlinedIcon />}
        </button>
      </div>
      <div className="bg-white px-3 py-2 flex justify-between rounded-b-md">
        <p className="font-semibold text-lg twoLinesOnly me-2">{name}</p>
        <p className="text-[#712689] font-semibold text-xl whitespace-nowrap">
          ${price}
        </p>
      </div>
    </div>
  );
}
