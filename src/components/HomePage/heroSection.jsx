import { useState } from "react";
import { RightArrow } from "../DynamicIcons";

export default function HeroSection() {
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
    <div className="w-full h-[66vh] relative">
      <img
        src={swiperImgUrls[currentImgIndex]}
        alt=""
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute top-1/2 left-0 right-0 flex px-3">
        <button className="rounded-md p-3" onClick={setPreviousImg}>
          <span>
            <RightArrow classIcon={"rotate-180"} />
          </span>
        </button>
        <button className="rounded-md p-3 ms-auto" onClick={setNextImg}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

