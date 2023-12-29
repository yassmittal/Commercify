// import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/header";
import Categories from "./components/categoriesPage";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router/dist";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/:category" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </>
  );
}

export default App;
