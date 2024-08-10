import React from "react";
import header from "./images/header.png";
import header2 from "./images/header-mob.png";

const Hero = () => {
  const isMobile = window.innerWidth < 768; 

  return (
    <section
      className="text-white py-20 bg-cover bg-left h-[35vh] md:h-[50vh] lg:h-[78vh]"
      style={{
        backgroundImage: `url(${isMobile ? header2 : header})`,
      }}
    >
    </section>
  );
};

export default Hero;
