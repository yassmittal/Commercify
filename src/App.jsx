import "./App.css";
import HomePage from "./components/HomePage";
import FeaturedAd from "./components/HomePage/featuredAd";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <FeaturedAd />
    </>
  );
}

export default App;
