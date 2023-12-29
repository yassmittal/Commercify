export default function Cart() {
  return (
    <div className="p-5 max-w-[700px] mx-auto">
      <h2 className="font-semibold text-4xl text-center mb-4">Cart Summary</h2>
      <div>
        <ul className="flex flex-col gap-2">
          <li>
            <div className="border border-gray-400 rounded-sm p-4 flex items-center justify-evenly gap-3">
              <div className="h-full w-32">
                <img
                  src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                  alt=""
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">
                  Mens Casual Premium Slim Fit T-Shirts
                </h3>
                <p className="text-gray-500 text-xs">
                  <span>Size: </span>
                  <span className="font-medium">XS</span>
                </p>
                <p className="text-gray-500 text-xs my-1">
                  <span>Price: </span>
                  <span className="font-medium">$1200</span>
                </p>
                <div className="flex items-center gap-3 ">
                  <button className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center">
                    -
                  </button>
                  <input
                    type="text"
                    value="1"
                    className="max-w-[30px] text-center"
                  />
                  <button className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center">
                    +
                  </button>

                  <button className="bg-red-600 rounded-md px-4 py-2 ms-auto text-white">remove</button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="border border-gray-400 rounded-sm p-4 flex items-center justify-evenly gap-3">
              <div className="h-full w-32">
                <img
                  src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                  alt=""
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">
                  Mens Casual Premium Slim Fit T-Shirts
                </h3>
                <p className="text-gray-500 text-xs">
                  <span>Size: </span>
                  <span className="font-medium">XS</span>
                </p>
                <p className="text-gray-500 text-xs my-1">
                  <span>Price: </span>
                  <span className="font-medium">$1200</span>
                </p>
                <div className="flex items-center gap-3 ">
                  <button className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center">
                    -
                  </button>
                  <input
                    type="text"
                    value="1"
                    className="max-w-[30px] text-center"
                  />
                  <button className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center">
                    +
                  </button>

                  <button className="bg-red-600 rounded-md px-4 py-2 ms-auto text-white">remove</button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="border border-gray-400 rounded-sm p-4 flex items-center justify-evenly gap-3">
              <div className="h-full w-32">
                <img
                  src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                  alt=""
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">
                  Mens Casual Premium Slim Fit T-Shirts
                </h3>
                <p className="text-gray-500 text-xs">
                  <span>Size: </span>
                  <span className="font-medium">XS</span>
                </p>
                <p className="text-gray-500 text-xs my-1">
                  <span>Price: </span>
                  <span className="font-medium">$1200</span>
                </p>
                <div className="flex items-center gap-3 ">
                  <button className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center">
                    -
                  </button>
                  <input
                    type="text"
                    value="1"
                    className="max-w-[30px] text-center"
                  />
                  <button className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center">
                    +
                  </button>

                  <button className="bg-red-600 rounded-md px-4 py-2 ms-auto text-white">remove</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
