import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/header";
import ProductDetails from "./components/ProductDetail/productDetails";
import { GoogleLogin } from "@react-oauth/google";


function App() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetails/:id" component={ProductDetails} />
      </Routes>
    </>
  );
}

export default App;
