import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
      </nav>
      <button className="order-btn">Order Now</button>
    </header>
  );
};

export default Header;
