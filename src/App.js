import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Products from "./Components/Products/Products.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Virtual from "./Components/Virtual/Virtual.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
