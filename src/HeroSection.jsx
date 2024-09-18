import React from "react";
import Pizza from "./Pizza";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Get the World’s <br />
          DELICIOUS <span> chi.PIZZA</span>
        </h1>
        <p>
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value.
        </p>
      </div>
      <Pizza />
    </section>
  );
};

export default HeroSection;
