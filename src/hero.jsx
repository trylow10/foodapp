// TODO: separte into folder hero and make like header and integate css module and see difference in class

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          {/* Get the World’s <br /> */}
          {/* TODO: use html entities  */}
          {/* https://www.toptal.com/designers/htmlarrows/symbols/ */}
          Get the World&apos;s <br />
          DELICIOUS <span> chi.PIZZA</span>
        </h1>
        <p>
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value.
        </p>
      </div>
    </section>
  );
};

export default Hero;
