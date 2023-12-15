import { CartIcon, HeartFilledIcon, ProfileIcon } from "./DynamicIcons";

export default function Header() {
  return (
    <>
      <div className="w-full px-4 py-2 bg-violet-100 text-white flex items-center gap-3">
        <div>
          <a href="#">
            <img src="./Logo.png" alt="" className="w-20" />
          </a>
        </div>

        <div className="w-full">
          <input
            type="search"
            className="px-4 py-2 rounded-md w-full outline-none text-black text-lg"
            placeholder="Search Your Product"
          />
        </div>

        <button className="text-[#712689] px-2">
          <CartIcon />
        </button>

        <button className="text-[#712689] px-2">
          <HeartFilledIcon />
        </button>

        <button className="text-[#712689] px-2">
          <ProfileIcon />
        </button>


        
      </div>
    </>
  );
}
