import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/header";
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
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>

      <Header />
      <HomePage />
    </>
  );
}

export default App;
