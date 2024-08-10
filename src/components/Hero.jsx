import React from "react";
import header from "./images/header.png";

const Hero = () => {
  return (
    <section
      className="text-white py-20 bg-cover bg-left h-[30vh] md:h-[70vh]"
      style={{ backgroundImage: `url(${header})` }}
    >
      
    </section>
  );
};

export default Hero;
