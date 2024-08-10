import React from "react";
import product1 from "./images/product1.png";
import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import product7 from "./images/product7.png";

const ProductCard = ({ name, image, price }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-contain mb-4 rounded"
    />
    <h3 className="font-semibold text-lg mb-2">{name}</h3>
    <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
    <button className="mt-4 w-full bg-green-400 text-white py-2 rounded hover:bg-green-500 transition duration-300">
      Add to Cart
    </button>
  </div>
);

const ProductGrid = () => {
  const products = [
    {
      name: "Nimyle 5L",
      image: product1,
      price: 14.99,
    },
    {
      name: "Nimyle 5L Lemongrass",
      image: product2,
      price: 14.99,
    },
    {
      name: "Nimyle 5L + Nimeasy",
      image: product3,
      price: 14.99,
    },
    {
      name: "Nimyle 5L + Gala Broomstick",
      image: product4,
      price: 14.99,
    },
    {
      name: "Nimyle 5L + Savlon Mega Pack",
      image: product5,
      price: 14.99,
    },
    {
      name: "Nimyle 5L + Savlon Multipurpose Cleaner",
      image: product6,
      price: 14.99,
    },
    {
      name: "Nimyle + Savalon Handwash + Gala Broomstick + Savalon Multipurpose Cleaner",
      image: product7,
      price: 14.99,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
