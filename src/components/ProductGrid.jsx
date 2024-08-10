import React from "react";
import product1 from "./images/product1.png";
import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import product7 from "./images/product7.png";

const ProductCard = ({ name, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-10 rounded-lg"></div>
    </div>
    <h3 className="font-semibold text-md mb-4 mt-2 text-center">{name}</h3>
    <div className="flex gap-4">
      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition duration-300 font-medium">
        Add to Cart
      </button>
      <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300 font-medium">
        Get A Quote
      </button>
    </div>
  </div>
);

const ProductGrid = () => {
  const products = [
    {
      name: "Nimyle 5L",
      image: product1,
    },
    {
      name: "Nimyle 5L Lemongrass",
      image: product2,
    },
    {
      name: "Nimyle 5L + Nimeasy",
      image: product3,
    },
    {
      name: "Nimyle 5L + Gala Broomstick",
      image: product4,
    },
    {
      name: "Nimyle 5L + Savlon Mega Pack",
      image: product5,
    },
    {
      name: "Nimyle 5L + Savlon Multipurpose Cleaner",
      image: product6,
    },
    {
      name: "Nimyle + Savalon Handwash + Gala Broomstick + Savalon Multipurpose Cleaner",
      image: product7,
    },
  ];

  return (
    <section className="py-16 px-2 md:px-6 lg:px-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
