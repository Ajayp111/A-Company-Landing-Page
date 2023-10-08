import React from "react";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}
export default App;
