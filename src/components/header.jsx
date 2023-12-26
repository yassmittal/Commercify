import { CartIcon, HeartFilledIcon, ProfileIcon } from "./DynamicIcons";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react/prop-types
export default function Header() {
  const [user, setUser] = useState();
  const [isOpen, setisOpen] = useState(false);

  const responseMessage = (response) => {
    const decodedToken = jwtDecode(response.credential);

    setUser({
      email: decodedToken.email,
      name: decodedToken.name,
      picture: decodedToken.picture,
    });
    setisOpen(false)
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {user && <></>}
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

        <button
          className="text-[#712689] px-2 relative"
          onClick={() => setisOpen(!isOpen)}
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
