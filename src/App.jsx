import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/header";
import ProductDetails from "./components/ProductDetail/productDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
      </Routes>
    </>
  );
}

export default App;
