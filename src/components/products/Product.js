import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Products.css"

export const Product = ({ product }) => {
  const { addToCart } = useContext(productContext);
  return (
    <div className="product" key={product._id}>
      <div className="imgBox">
        <img src={product.image} alt="ok" />
      </div>

      <div className="info">
        <p>{product.title}</p>
        <h4>${product.price}</h4>
      </div>

      <div className="btnContainer">
        <button className="addToCart" onClick={() => addToCart(product._id)}>
          <AddShoppingCartIcon />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};
