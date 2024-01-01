import { useNavigate } from "react-router";

export default function SelectDeliveryAddress() {

  const navigate = useNavigate()
  return (
    <div className="p-5 max-w-[600px] mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-3">
        Select Address
      </h2>
      <ul className="flex flex-col gap-3 mb-3">
        <li>
          <label htmlFor="address1">
            <div className="bg-gray-100 rounded-md p-4">
              <input
                type="radio"
                name="address"
                id="address1"
                className="me-3"
              />
              address 1
            </div>
          </label>
        </li>

        <li>
          <label htmlFor="address2">
            <div className="bg-gray-100 rounded-md p-4">
              <input
                type="radio"
                name="address"
                id="address2"
                className="me-3"
              />
              address 2
            </div>
          </label>
        </li>
      </ul>
      <div className="flex">
        <button className="bg-gray-200 rounded-md px-4 py-2 ms-auto" onClick={() => navigate(-1)}>
          back
        </button>
        <button className="bg-[#712689] rounded-md px-4 py-2 ms-3 text-white">
          Continue
        </button>
      </div>
    </div>
  );
}
