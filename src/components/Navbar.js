import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { productContext } from "../context/ProductContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



const Navbar = () => {
  const { cart } = useContext(productContext);
  return (
    <nav className="navigation">
      <div className="brand">
        <h2>Store</h2>
      </div>

      <ul className="links">
        <li>
          <NavLink className="link" to="/">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/cart">
            <ShoppingCartIcon />
            <p>({cart.length})</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;