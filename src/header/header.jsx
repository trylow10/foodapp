// instead of header => _header_1kx1j_2  (random id add garxa conflict naayos bhanera css)
// good for larger app dherai jana team ma kam garda class conflict audaina
// https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules autocompltion payo yo extension bata.
// tesaile jaile module use garna vanilla handa comes built in with vite or react app.

import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes["nav-links"]}>
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
      <button className={classes["order-btn"]}>Order Now</button>
    </header>
  );
};

export default Header;
