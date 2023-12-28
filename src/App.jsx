// import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/header";
import Categories from "./components/categoriesPage";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router/dist";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/:category" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
