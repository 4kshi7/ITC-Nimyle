import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
