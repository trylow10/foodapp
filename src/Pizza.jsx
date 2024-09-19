// TODO: separte into folder hero and make like header and integate css module and see difference in class

// define constant file for this
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.png";
import { usePizza } from "./context/pizza-provider";

const pizzaImages = [
  { id: 1, src: image1, alt: "Pizza 1" },
  { id: 2, src: image2, alt: "Pizza 2" },
  { id: 3, src: image3, alt: "Pizza 3" },
  { id: 4, src: image4, alt: "Pizza 4" },
];

const Pizza = () => {
  const { activePizza, setActivePizza } = usePizza();

  return (
    <div>
      <div className="pizza-images">
        {pizzaImages.map((pizza, index) => {
          return (
            <button key={pizza.id} onClick={() => setActivePizza(index)}>
              <img src={pizza.src} alt={pizza.alt} />
              <div
                className={`border-b ${index === activePizza ? "active" : ""} `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pizza;
