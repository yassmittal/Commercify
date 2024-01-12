import { useState } from "react";
import { RightArrow } from "../DynamicIcons";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const navigate = useNavigate();

  const swiperImgUrls = [
    "Images/heroBanner1.png",
    "Images/heroBanner2.png",
    "Images/heroBanner3.png",
    "Images/heroBanner4.png",
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function setPreviousImg() {
    if (currentImgIndex <= 0) {
      setCurrentImgIndex(swiperImgUrls.length - 1);
    } else {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  }

  function setNextImg() {
    if (currentImgIndex >= swiperImgUrls.length - 1) {
      setCurrentImgIndex(0);
    } else {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  }

  return (
    <div
      className="w-full h-[30vw] relative"
      onClick={() => navigate("/all-products")}
    >
      <img
        src={swiperImgUrls[currentImgIndex]}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute top-1/2 left-0 right-0 flex px-3 -translate-y-1/2">
        <button
          className="rounded-md p-3"
          onClick={(e) => {
            e.stopPropagation();
            setPreviousImg();
          }}
        >
          <span>
            <RightArrow classIcon={"rotate-180"} />
          </span>
        </button>
        <button
          className="rounded-md p-3 ms-auto"
          onClick={(e) => {
            e.stopPropagation();
            setNextImg();
          }}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
