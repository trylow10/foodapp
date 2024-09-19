// TODO: css module
import Header from "./header/header";
import Hero from "./hero";
import Pizza from "./pizza";

import PizzaProvider from "./context/pizza-provider";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <PizzaProvider>
        <Pizza />
        <div className="selected-image-container">{/*  */}</div>
      </PizzaProvider>
    </>
  );
};

export default App;
