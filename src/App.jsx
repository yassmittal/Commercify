// import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/header";
import Categories from "./components/categoriesPage";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes, useNavigate, useParams } from "react-router/dist";
import Cart from "./components/cart";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState();
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // let product = products.find((product) => {
  //   return +product.id === +id;
  // });

  function addToCart() {
    if (cartItems.length == 0) {
      setCartItems([{ ...product, quantity: 1 }]);
      return;
    }

    const isItemPresent = cartItems.filter((cartItem) => {
      return cartItem.id === product.id;
    });
    // console.log(isItemPresent);
    if (isItemPresent) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: ++item.quantity };
        } else {
          item;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function navigateToCart() {
    navigate("/cart");
  }

  function toggleDropdown() {
    setisOpen(!isOpen);
  }

  const responseMessage = (response) => {
    const decodedToken = jwtDecode(response.credential);

    setUser({
      email: decodedToken.email,
      name: decodedToken.name,
      picture: decodedToken.picture,
    });
    setisOpen(false);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Header
        user={user}
        navigateToCart={navigateToCart}
        responseMessage={responseMessage}
        errorMessage={errorMessage}
        handleLogout={handleLogout}
        toggleDropdown={toggleDropdown}
        isOpen={isOpen}
        cartItemsNumber={cartItems.length}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/ProductDetail/:id"
          element={
            <ProductDetail
              loading={loading}
              addToCart={addToCart}
              products={products}
            />
          }
        />
        <Route path="/:category" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
