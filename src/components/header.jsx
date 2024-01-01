/* eslint-disable react/prop-types */
import { CartIcon, HeartFilledIcon, ProfileIcon } from "./DynamicIcons";
import { GoogleLogin } from "@react-oauth/google";

// eslint-disable-next-line react/prop-types
export default function Header({
  navigateToCart,
  user,
  responseMessage,
  errorMessage,
  handleLogout,
  toggleDropdown,
  isOpen,
  cartItemsNumber,
}) {
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

        <button
          className="text-[#712689] px-2 relative"
          onClick={navigateToCart}
        >
          <CartIcon />
          {cartItemsNumber && (
            <span className="w-4 h-4 bg-red-800 text-white text-xs leading-4 text-center rounded-full absolute -top-1 right-0">
              {cartItemsNumber}
            </span>
          )}
          {/* <span className="w-4 h-4 bg-red-800 text-white text-xs leading-4 text-center rounded-full absolute -top-1 right-0">
            3
          </span> */}
        </button>

        <button className="text-[#712689] px-2">
          <HeartFilledIcon />
        </button>

        <button
          className="text-[#712689] px-2 relative"
          onClick={toggleDropdown}
        >
          {user && user.picture ? (
            <div className="w-6 h-6">
              <img
                src={user.picture}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ) : (
            <ProfileIcon />
          )}

          {isOpen ? (
            <div className="absolute top-full end-0 z-10">
              {!user && (
                <div>
                  <GoogleLogin
                    onSuccess={responseMessage}
                    onError={errorMessage}
                    useOneTap
                  />
                </div>
              )}

              {user && (
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-sm bg-red-600"
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </button>
      </div>
    </>
  );
}
