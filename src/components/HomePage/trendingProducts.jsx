import { HeartOutlinedIcon } from "../DynamicIcons";

export default function TrendingProducts() {
  return (
    <div className="p-4">
      <h2 className="text-4xl text-center font-semibold my-6">Trending Products</h2>
      <div className="grid grid-cols-4 gap-12">
        <div className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all">
          <div className="bg-violet-200 rounded-t-md relative p-3">
            <img
              src="Images/realme-c12-image.jpeg"
              alt=""
              className="w-40 mx-auto h-full object-cover"
            />
            <button className="text-[#712689] absolute top-3 right-3">
              <HeartOutlinedIcon />
            </button>
          </div>
          <div className="bg-white px-3 py-2 flex justify-between items-center rounded-b-md">
            <p className="font-semibold text-lg">Readme 12 pro</p>
            <p className="text-[#712689] font-semibold text-xl">Rs 11.999.00</p>
          </div>
        </div>
        <div className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all">
          <div className="bg-violet-200 rounded-t-md relative p-3">
            <img
              src="Images/realme-c12-image.jpeg"
              alt=""
              className="w-40 mx-auto h-full object-cover"
            />
            <button className="text-[#712689] absolute top-3 right-3">
              <HeartOutlinedIcon />
            </button>
          </div>
          <div className="bg-white px-3 py-2 flex justify-between items-center rounded-b-md">
            <p className="font-semibold text-lg">Readme 12 pro</p>
            <p className="text-[#712689] font-semibold text-xl">Rs 11.999.00</p>
          </div>
        </div>

        <div className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all">
          <div className="bg-violet-200 rounded-t-md relative p-3">
            <img
              src="Images/realme-c12-image.jpeg"
              alt=""
              className="w-40 mx-auto h-full object-cover"
            />
            <button className="text-[#712689] absolute top-3 right-3">
              <HeartOutlinedIcon />
            </button>
          </div>
          <div className="bg-white px-3 py-2 flex justify-between items-center rounded-b-md">
            <p className="font-semibold text-lg">Readme 12 pro</p>
            <p className="text-[#712689] font-semibold text-xl">Rs 11.999.00</p>
          </div>
        </div>

        <div className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all">
          <div className="bg-violet-200 rounded-t-md relative p-3">
            <img
              src="Images/realme-c12-image.jpeg"
              alt=""
              className="w-40 mx-auto h-full object-cover"
            />
            <button className="text-[#712689] absolute top-3 right-3">
              <HeartOutlinedIcon />
            </button>
          </div>
          <div className="bg-white px-3 py-2 flex justify-between items-center rounded-b-md">
            <p className="font-semibold text-lg">Readme 12 pro</p>
            <p className="text-[#712689] font-semibold text-xl">Rs 11.999.00</p>
          </div>
        </div>

      </div>
    </div>
  );
}
