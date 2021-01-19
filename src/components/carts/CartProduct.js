import React, { useContext, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { productContext } from "../../context/ProductContext";
import styles from "./Carts.module.css";

export const CartProduct = ({ cartItem }) => {
  const { increase, deleteFromCart, decrese } = useContext(productContext);

  return (
    <div key={cartItem._id} className={styles.Item}>
      <div className={styles.itemImg}>
        <img src={cartItem.image} />
      </div>

      <div className={styles.itemInfo}>
        <h4 className={styles.infoTitle}>{cartItem.title}</h4>

        <div>
          <h3>${cartItem.count * cartItem.price}</h3>
        </div>

        <div className={styles.itemBtns}>
          <button onClick={() => decrese(cartItem._id)} className="btnDecrease">
            -
          </button>
          <span>{cartItem.count}</span>
          <button
            onClick={() => increase(cartItem._id)}
            className="btnIncrease"
          >
            +
          </button>
        </div>
      </div>

      <CloseIcon
        className={styles.close}
        onClick={() => deleteFromCart(cartItem._id)}
      />
    </div>
  );
};
