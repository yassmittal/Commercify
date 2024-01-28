/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { CartIcon, HeartFilledIcon, ProfileIcon } from "../DynamicIcons";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import { createPortal } from "react-dom";

export default function Header({
  navigateToCart,
  user,
  responseMessage,
  errorMessage,
  handleLogout,
  toggleDropdown,
  isOpen,
  cartItemsNumber,
  showResult,
  searching,
  resultArr,
  searchProduct,
  setSearching,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full px-4 py-2 bg-violet-100 text-white flex items-center gap-3 fixed z-10">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-20" />
          </Link>
        </div>

        <div className="w-full relative">
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              showResult();
            }}
          >
            <input
              type="search"
              className="px-4 py-2 rounded-md w-full outline-none text-black text-lg z-10 relative"
              placeholder="Search Your Product"
              onChange={(e) => searchProduct(e.target.value)}
            />
          </form>

          {searching ? (
            <>
              <div className="absolute top-full bg-white border border-gray-300 rounded-md w-full text-black z-10 divide-gray-300  divide-y max-h-[300px] overflow-auto">
                {resultArr.map((item) => {
                  return (
                    <Link
                      to={{
                        pathname: "/searh-result",
                        state: { exampleProp: "resultArr" },
                      }}
                      className="px-3 py-2 cursor-pointer block"
                      key={item.id}
                      onClick={() => {
                        setSearching(false);
                        showResult(resultArr);
                      }}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>

              {createPortal(
                <div
                  className="absolute inset-0"
                  onClick={() => setSearching(false)}
                ></div>,
                document.body,
              )}
            </>
          ) : (
            ""
          )}
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

        <button
          className="text-[#712689] px-2"
          onClick={() => navigate("/favorite-products")}
        >
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
