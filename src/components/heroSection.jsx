import { RightArrow } from "./DynamicIcons";

export default function HeroSection() {
  return (
    <div className="w-full h-[66vh] relative">
      {/* <img src="Images/heroBanner1.png" alt="" className="w-full h-full object-cover" /> */}
      <img
        src="Images/bannerSale2.jpg"
        alt=""
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute top-1/2 left-0 right-0 flex px-3">
        <button className="rounded-md p-3">
          <span>
            <RightArrow classIcon={"rotate-180"} />
          </span>
        </button>
        <button className="rounded-md p-3 ms-auto">
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
