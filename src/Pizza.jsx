import React, { useState } from "react";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.png";

const pizzaImages = [
  { id: 1, src: image1, alt: "Pizza 1" },
  { id: 2, src: image2, alt: "Pizza 2" },
  { id: 3, src: image3, alt: "Pizza 3" },
  { id: 4, src: image4, alt: "Pizza 4" },
];

const Pizza = () => {
  const [selectedImage, setSelectedImage] = useState(image1);
  const handleImageHover = (src) => {
    setSelectedImage(src);
  };

  return (
    <div>
      <div className="pizza-images">
        {pizzaImages.map((pizza) => (
          <img
            key={pizza.id}
            src={pizza.src}
            alt={pizza.alt}
            onMouseEnter={() => handleImageHover(pizza.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="selected-image-container">
          <img src={selectedImage} alt="Selected Pizza" />
        </div>
      )}
    </div>
  );
};

export default Pizza;
